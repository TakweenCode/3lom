import {
  School,
  Trash2,
  LibraryBig,
  PencilRuler,
  Smile,
  Frown,
  TreePine,
  Flower2,
  Recycle,
  Utensils,
  Droplets,
  Sparkles,
  CheckCircle2,
  XCircle,
  Footprints,
  HandPlatter,
  Apple,
  Banana,
  Candy,
} from 'lucide-react';
import { SectionData, SectionType } from '../types';

export const APP_SECTIONS: SectionData[] = [
  {
    id: SectionType.CLASSROOM,
    title: "نظافة الفصل الدراسي",
    description: "فصلنا هو بيتنا الثاني، هيا نتعلم كيف نحافظ عليه!",
    MainIcon: LibraryBig,
    themeColor: 'kid-blue',
    flashcards: [
      {
        id: 1,
        frontText: "لماذا نحافظ على نظافة فصلنا؟",
        FrontIcon: School,
        backText: "لأنه بيتنا الثاني، ولنتعلم في مكان جميل ومريح!",
        BackIcon: Sparkles,
      },
      {
        id: 2,
        frontText: "سلة المهملات صديقتي!",
        FrontIcon: Trash2,
        backText: "أرمي فيها الأوراق والمناديل، وليس على الأرض.",
        BackIcon: CheckCircle2,
      },
      {
        id: 3,
        frontText: "مكتبي ودرجي مرتب",
        FrontIcon: LibraryBig,
        backText: "أحافظ على كتبي ودفاتري نظيفة ومرتبة دائماً.",
        BackIcon: PencilRuler,
      },
      {
        id: 4,
        frontText: "الجدران والسبورة",
        FrontIcon: PencilRuler,
        backText: "لا أرسم على الجدران أو الطاولات، أستخدم السبورة للتعلم!",
        BackIcon: XCircle,
      },
    ],
    questions: [
      {
        id: 101,
        questionText: "أين يجب أن تضع غلاف الحلوى بعد أكله؟",
        options: [
          { id: 1, text: "في سلة المهملات", Icon: Trash2, isCorrect: true },
          { id: 2, text: "تحت المكتب", Icon: Footprints, isCorrect: false },
        ],
      },
      {
        id: 102,
        questionText: "هل الرسم على طاولة الفصل سلوك صحيح؟",
        options: [
          { id: 1, text: "نعم، سلوك صحيح", Icon: Smile, isCorrect: false },
          { id: 2, text: "لا، سلوك خاطئ", Icon: Frown, isCorrect: true },
        ],
      },
      {
        id: 103,
        questionText: "كيف أجعل فصلي أجمل؟",
        options: [
          { id: 1, text: "بتركه متسخاً", Icon: XCircle, isCorrect: false },
          { id: 2, text: "بتنظيفه وترتيبه", Icon: Sparkles, isCorrect: true },
        ],
      },
    ],
  },
  {
    id: SectionType.PLAYGROUND,
    title: "نظافة الساحة والملعب",
    description: "الساحة مكان لعبنا ومرحنا، لنجعلها دائماً نظيفة!",
    MainIcon: TreePine,
    themeColor: 'kid-green',
    flashcards: [
      {
        id: 1,
        frontText: "ساحتنا مكان للعب!",
        FrontIcon: Smile,
        backText: "نحافظ عليها نظيفة لنلعب بأمان وسعادة.",
        BackIcon: Sparkles,
      },
      {
        id: 2,
        frontText: "الأشجار والزرع",
        FrontIcon: Flower2,
        backText: "لا أقطف الأزهار أو أكسر الأغصان، هي تجمّل مدرستنا.",
        BackIcon: TreePine,
      },
      {
        id: 3,
        frontText: "فصل النفايات (التدوير)",
        FrontIcon: Recycle,
        backText: "نضع البلاستيك والورق في السلة المخصصة للتدوير!",
        BackIcon: CheckCircle2,
      },
    ],
    questions: [
      {
        id: 201,
        questionText: "أين نضع علبة العصير البلاستيكية الفارغة؟",
        options: [
          { id: 1, text: "سلة التدوير", Icon: Recycle, isCorrect: true },
          { id: 2, text: "على العشب", Icon: Flower2, isCorrect: false },
        ],
      },
      {
        id: 202,
        questionText: "هل من الجيد ترك الألعاب مبعثرة في الساحة بعد الانتهاء؟",
        options: [
          { id: 1, text: "نعم", Icon: Smile, isCorrect: false },
          { id: 2, text: "لا", Icon: Frown, isCorrect: true },
        ],
      },
       {
        id: 203,
        questionText: "ماذا نفعل إذا رأينا قمامة على الأرض في الساحة؟",
        options: [
          { id: 1, text: "نتركها مكانها", Icon: XCircle, isCorrect: false },
          { id: 2, text: "نضعها في السلة", Icon: Trash2, isCorrect: true },
        ],
      },
    ],
  },
  {
    id: SectionType.COMMON_AREAS,
    title: "المرافق المشتركة",
    description: "المقصف ودورات المياه ملك للجميع، فلنحافظ عليها.",
    MainIcon: Utensils,
    themeColor: 'kid-purple',
    flashcards: [
      {
        id: 1,
        frontText: "آداب المقصف",
        FrontIcon: Apple,
        backText: "أجلس بهدوء وأرمي بقايا الطعام في السلة المخصصة.",
        BackIcon: Trash2,
      },
      {
        id: 2,
        frontText: "نظافة الطاولة",
        FrontIcon: HandPlatter,
        backText: "أترك طاولتي نظيفة ليستخدمها زميلي الذي بعدي.",
        BackIcon: Sparkles,
      },
      {
        id: 3,
        frontText: "الحفاظ على دورة المياه",
        FrontIcon: Droplets,
        backText: "أحافظ على نظافة المكان وأغسل يدي جيداً بالماء والصابون.",
        BackIcon: CheckCircle2,
      },
    ],
    questions: [
      {
        id: 301,
        questionText: "ماذا تفعل بعد الانتهاء من الأكل في المقصف؟",
        options: [
          { id: 1, text: "أترك البقايا وأذهب", Icon: XCircle, isCorrect: false },
          { id: 2, text: "أنظف مكاني وأرمي القمامة", Icon: CheckCircle2, isCorrect: true },
        ],
      },
      {
        id: 302,
        questionText: "هل يجب أن نترك صنبور الماء مفتوحاً بعد غسل اليدين؟",
        options: [
          { id: 1, text: "نعم", Icon: Droplets, isCorrect: false },
          { id: 2, text: "لا، أغلقه بإحكام", Icon: CheckCircle2, isCorrect: true },
        ],
      },
      {
        id: 303,
        questionText: "لماذا نغسل أيدينا بعد استخدام دورة المياه؟",
        options: [
          { id: 1, text: "للوقاية من الجراثيم", Icon: Sparkles, isCorrect: true },
          { id: 2, text: "لتضييع الوقت", Icon: Footprints, isCorrect: false },
        ],
      },
    ],
  },
];