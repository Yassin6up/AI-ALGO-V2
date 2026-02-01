import { PrismaClient, TransactionStatus, TransactionType, WalletType, NetworkType } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const run = async () => {
  const passwordHash = await bcrypt.hash('Neoalgo@123', 10);
  const admin = await prisma.user.create({
    data: {
      name: 'Admin Commander',
      email: 'admin@neoalgo.ai',
      passwordHash,
      phone: '+1-202-555-0100',
      role: 'admin',
      referralCode: 'NEOADMIN'
    }
  });

  const demoUsers = await Promise.all([
    prisma.user.create({
      data: {
        name: 'Nova Riley',
        email: 'nova@neoalgo.ai',
        passwordHash,
        phone: '+1-202-555-0124',
        referralCode: 'NOVA2024',
        referredBy: 'NEOADMIN'
      }
    }),
    prisma.user.create({
      data: {
        name: 'Kai Mendoza',
        email: 'kai@neoalgo.ai',
        passwordHash,
        phone: '+1-202-555-0133',
        referralCode: 'KAI2024',
        referredBy: 'NOVA2024'
      }
    })
  ]);

  const users = [admin, ...demoUsers];

  for (const user of users) {
    await prisma.wallet.createMany({
      data: [
        { userId: user.id, type: WalletType.INCOME, balance: 12000 },
        { userId: user.id, type: WalletType.PACKAGE, balance: 6200 }
      ]
    });

    await prisma.transaction.createMany({
      data: [
        {
          userId: user.id,
          type: TransactionType.DEPOSIT,
          amount: 1500,
          status: TransactionStatus.COMPLETED,
          metadata: { source: 'USDT' }
        },
        {
          userId: user.id,
          type: TransactionType.BOT_ACTIVATION,
          amount: 125,
          status: TransactionStatus.COMPLETED,
          metadata: { plan: 'Quantum Trend' }
        }
      ]
    });

    await prisma.deposit.create({
      data: {
        userId: user.id,
        amount: 1500,
        method: 'USDT',
        status: TransactionStatus.COMPLETED,
        txHash: '0xneoalgo'
      }
    });

    await prisma.withdrawal.create({
      data: {
        userId: user.id,
        amount: 320,
        walletType: WalletType.INCOME,
        address: '0xwalletaddress',
        network: NetworkType.USDT_BEP20,
        status: TransactionStatus.PENDING
      }
    });

    await prisma.botActivation.create({
      data: {
        userId: user.id,
        fee: 125,
        status: TransactionStatus.COMPLETED
      }
    });

    await prisma.investment.create({
      data: {
        userId: user.id,
        amount: 2000,
        roi: 0.18,
        status: TransactionStatus.COMPLETED
      }
    });

    await prisma.incomeLog.createMany({
      data: [
        { userId: user.id, category: 'Affiliate', amount: 320, level: 1 },
        { userId: user.id, category: 'Trading', amount: 680 }
      ]
    });

    await prisma.walletAddress.create({
      data: {
        userId: user.id,
        network: NetworkType.USDT_BEP20,
        address: '0xwalletaddress',
        isVerified: true
      }
    });
  }

  console.log('Seed complete');
};

run()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
