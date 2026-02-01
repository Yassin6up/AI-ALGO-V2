import { prisma } from '../src/config/prisma';
import { hashPassword } from '../src/utils/auth';

const seed = async () => {
  await prisma.incomeLog.deleteMany();
  await prisma.investment.deleteMany();
  await prisma.botActivation.deleteMany();
  await prisma.withdrawal.deleteMany();
  await prisma.deposit.deleteMany();
  await prisma.transaction.deleteMany();
  await prisma.wallet.deleteMany();
  await prisma.walletAddress.deleteMany();
  await prisma.user.deleteMany();

  const admin = await prisma.user.create({
    data: {
      name: 'Admin Operator',
      email: 'admin@neoalgo.ai',
      passwordHash: await hashPassword('Admin123!'),
      role: 'admin',
      referralCode: 'ADMIN01'
    }
  });

  const demoUsers = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Nova Miles',
        email: 'nova@neoalgo.ai',
        passwordHash: await hashPassword('Password123!'),
        referralCode: 'NOVA01',
        referredBy: admin.referralCode
      }
    }),
    prisma.user.create({
      data: {
        name: 'Atlas Prime',
        email: 'atlas@neoalgo.ai',
        passwordHash: await hashPassword('Password123!'),
        referralCode: 'ATLAS01',
        referredBy: admin.referralCode
      }
    })
  ]);

  const users = [admin, ...demoUsers];

  for (const user of users) {
    await prisma.wallet.createMany({
      data: [
        { userId: user.id, type: 'INCOME', balance: 15000 },
        { userId: user.id, type: 'PACKAGE', balance: 5000 }
      ]
    });

    await prisma.deposit.create({
      data: {
        userId: user.id,
        amount: 1500,
        method: 'USDT',
        status: 'COMPLETED'
      }
    });

    await prisma.botActivation.create({
      data: {
        userId: user.id,
        fee: 125,
        status: 'COMPLETED'
      }
    });

    await prisma.investment.create({
      data: {
        userId: user.id,
        amount: 2500,
        roi: 0.18,
        status: 'COMPLETED'
      }
    });

    await prisma.incomeLog.createMany({
      data: [
        { userId: user.id, category: 'affiliate', amount: 320, level: 1 },
        { userId: user.id, category: 'trading', amount: 890, level: 0 }
      ]
    });
  }

  console.log('Seed data created');
};

seed()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
