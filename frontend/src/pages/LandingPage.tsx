import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionHeader from '../components/SectionHeader';
import PrimaryButton from '../components/PrimaryButton';

const stats = [
  { label: 'مستخدم نشط', value: '128,421' },
  { label: 'صفقة منفذة', value: '9.8M' },
  { label: 'نسبة الفوز', value: '78.4%' },
  { label: 'دقة الإشارات', value: '92.1%' }
];

const features = [
  {
    title: 'إشارات ذكاء تكيفية',
    description: 'نماذج تتعلم لحظيًا لالتقاط الفرص بدقة أعلى.'
  },
  {
    title: 'تحكم ذكي بالمخاطر',
    description: 'حدود مرنة، وإيقاف ذكي يحمي رأس المال.'
  },
  {
    title: 'تخصيص تلقائي',
    description: 'توجيه رأس المال عبر استراتيجيات دقيقة ومقاسة.'
  },
  {
    title: 'سحب آلي',
    description: 'موافقات مشفرة وسحوبات منظمة بثقة.'
  }
];

const steps = [
  {
    step: '01',
    title: 'الربط والتحقق',
    description: 'بدء سريع مع تحقق أمني مصمم للثقة.'
  },
  {
    step: '02',
    title: 'اختيار الاستراتيجية',
    description: 'اختر أسلوبك: ترند، سكالبنج، أو ماكرو.'
  },
  {
    step: '03',
    title: 'توزيع رأس المال',
    description: 'توزيع ذكي يحافظ على التوازن.'
  },
  {
    step: '04',
    title: 'مراقبة وتحكم',
    description: 'رؤى فورية مع أدوات تحكم مرنة.'
  }
];

const pricing = [
  {
    name: 'ستارتر',
    price: '$39',
    description: 'نقطة انطلاق ذكية للتجربة.',
    perks: ['استراتيجية واحدة', 'تنبيهات فورية', 'تقرير أسبوعي']
  },
  {
    name: 'برو',
    price: '$129',
    description: 'تحكم أعمق ونمو أسرع.',
    perks: ['5 استراتيجيات', 'تحكم مخاطر', 'دعم أولوية']
  },
  {
    name: 'إيليت',
    price: '$299',
    description: 'قدرات احترافية بلا حدود.',
    perks: ['استراتيجيات غير محدودة', 'تغذية ألفا خاصة', 'فريق كوانت']
  }
];

const faqs = [
  {
    q: 'هل المنصة ملتزمة بالمعايير؟',
    a: 'نعمل مع شركاء متوافقين ونوفر سجلات تدقيق بمستوى مصرفي.'
  },
  {
    q: 'ما سرعة السحب؟',
    a: 'توجيه آلي للموافقات ينجز السحب خلال دقائق بعد التحقق.'
  },
  {
    q: 'هل يمكن التحكم بالمخاطر يدويًا؟',
    a: 'نعم، يمكنك التبديل للتحكم اليدوي وإعدادات الإيقاف المخصص.'
  }
];

const testimonials = [
  {
    name: 'آريا منديز',
    role: 'قائدة محافظ رقمية',
    quote: 'NEOALGO AI يشبه غرفة عمليات لحظية. الوضوح مذهل.'
  },
  {
    name: 'ديفون لي',
    role: 'مؤسس فينتك',
    quote: 'واجهة تداول ذكية جدًا مع تجربة سلسة ونظيفة.'
  },
  {
    name: 'جوردان باتل',
    role: 'محلل كوانت',
    quote: 'سرعة التنفيذ والشفافية البصرية بمستوى النخبة.'
  }
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-base text-slate-900">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-90" />
        <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-neon-purple/20 blur-[140px]" />
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-neon-cyan/20 blur-[160px]" />
        <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-16">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-white/80 border border-slate-200 flex items-center justify-center">
              <Sparkles className="text-neon-cyan" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">NEOALGO AI</p>
              <p className="text-lg font-semibold">لوحة قيادة التداول الذكي</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">الميزات</a>
            <a href="#pricing" className="hover:text-slate-900">الأسعار</a>
            <a href="#security" className="hover:text-slate-900">الأمان</a>
            <a href="#faq" className="hover:text-slate-900">الأسئلة</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="neon-outline text-sm">تسجيل الدخول</Link>
            <Link to="/register" className="neon-button text-sm">ابدأ الآن</Link>
          </div>
        </header>

        <section className="relative z-10 px-6 pb-28 pt-12 md:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-semibold leading-tight"
              >
                تداول ذكي بواجهة
                <span className="gradient-text"> مستقبلية وبسيطة.</span>
              </motion.h1>
              <p className="mt-6 text-lg text-slate-600 max-w-xl">
                منصة NEOALGO AI تجمع بين الإشارات الذكية وإدارة المخاطر والتخصيص الآلي ضمن تجربة
                نظيفة وسريعة للمستثمرين العصريين.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton>
                  ابدأ الآن <ArrowRight size={18} />
                </PrimaryButton>
                <button className="neon-outline">استعرض المنصة</button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {stats.map((item) => (
                  <GlassCard key={item.label} className="p-5">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 right-10 h-32 w-32 rounded-full bg-neon-blue/20 blur-3xl" />
              <GlassCard className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">حالة الذكاء</p>
                    <p className="text-2xl font-semibold">96% مثالي</p>
                  </div>
                  <span className="rounded-full bg-neon-cyan/20 px-3 py-1 text-xs">مباشر</span>
                </div>
                <div className="mt-6 space-y-4">
                  {['مزامنة السيولة', 'تحوط المخاطر', 'تعزيز الإشارات'].map((item) => (
                    <div key={item} className="flex items-center justify-between text-sm">
                      <span>{item}</span>
                      <span className="text-neon-cyan">متزامن</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-4">
                  <p className="text-xs text-slate-500">العائد المتوقع</p>
                  <p className="text-3xl font-semibold text-neon-purple">+18.4%</p>
                  <p className="text-xs text-slate-500">آخر 30 يومًا</p>
                </div>
              </GlassCard>
              <div className="mt-6 grid gap-4">
                <GlassCard className="flex items-center gap-4">
                  <div className="rounded-2xl bg-neon-purple/20 p-3">
                    <Zap className="text-neon-purple" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">زمن التنفيذ</p>
                    <p className="text-lg font-semibold">0.3ms تنفيذ</p>
                  </div>
                </GlassCard>
                <GlassCard className="flex items-center gap-4">
                  <div className="rounded-2xl bg-neon-cyan/20 p-3">
                    <ShieldCheck className="text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">الأمان</p>
                    <p className="text-lg font-semibold">خزائن صفر ثقة</p>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="features" className="px-6 py-20 md:px-16">
        <SectionHeader
          title="ميزات ذكية بأقل تعقيد"
          subtitle="كل ما تحتاجه لإدارة تداولك بواجهة نظيفة وحديثة."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="hover:-translate-y-2 transition duration-300">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-16 bg-white/70">
        <SectionHeader
          title="كيف تعمل المنصة"
          subtitle="خطوات بسيطة لبداية قوية وواضحة."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <GlassCard key={step.step}>
              <p className="text-sm text-neon-cyan">{step.step}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{step.description}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="security" className="px-6 py-20 md:px-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeader
              title="أمان هندسي مبني على الثقة"
              subtitle="حماية متعددة الطبقات مع مراقبة مستمرة وموافقات السحب."
            />
            <div className="mt-8 space-y-4">
              {['تأكيد ثنائي جاهز للبصمة', 'خزائن بيانات مشفرة', 'تأكيدات السحب'].map((item) => (
                <GlassCard key={item} className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-neon-blue/20" />
                  <p className="text-sm text-slate-700">{item}</p>
                </GlassCard>
              ))}
            </div>
          </div>
          <GlassCard className="p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-500">ذكاء المخاطر</p>
            <h3 className="mt-4 text-3xl font-semibold">حواجز ذكاء في كل صفقة.</h3>
            <p className="mt-4 text-slate-600">
              تقييم مخاطر تكيفي يراقب السيولة والتذبذب والتعرض خلال أجزاء من الثانية لحماية رأس المال.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['كشف الشذوذ لحظيًا', 'موافقات مشفرة', 'استجابة فورية للحوادث', 'مراقبة ذكاء 24/7'].map(
                (item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white/60 p-4 text-sm">
                    {item}
                  </div>
                )
              )}
            </div>
          </GlassCard>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20 md:px-16 bg-white/70">
        <SectionHeader title="أسعار مصممة للنمو" subtitle="ارتقِ لتفعيل توجيه أذكى وتنفيذ احترافي." />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pricing.map((tier, index) => (
            <GlassCard key={tier.name} className={index === 1 ? 'border-neon-cyan/60' : ''}>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{tier.name}</p>
              <p className="mt-4 text-4xl font-semibold">{tier.price}</p>
              <p className="mt-2 text-sm text-slate-600">{tier.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-neon-cyan" />
                    {perk}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full neon-outline">اختر {tier.name}</button>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <SectionHeader title="موثوق لدى نخبة المتداولين" subtitle="آراء حقيقية من فرق تداول تعتمد الذكاء." />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <GlassCard key={item.name}>
              <p className="text-slate-600">"{item.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section id="faq" className="px-6 py-20 md:px-16 bg-white/70">
        <SectionHeader title="الأسئلة الشائعة" subtitle="كل ما تحتاج معرفته قبل البدء." />
        <div className="mt-10 space-y-4">
          {faqs.map((item) => (
            <GlassCard key={item.q}>
              <p className="text-lg font-semibold">{item.q}</p>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <footer className="px-6 py-12 md:px-16 border-t border-slate-200">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">NEOALGO AI</p>
            <p className="text-sm text-slate-500">لوحة قيادة تداول ذكية.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-900">الشروط</a>
            <a href="#" className="hover:text-slate-900">الخصوصية</a>
            <a href="#" className="hover:text-slate-900">تواصل معنا</a>
            <a href="#" className="hover:text-slate-900">تويتر</a>
            <a href="#" className="hover:text-slate-900">لينكدإن</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
