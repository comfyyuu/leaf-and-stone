import { MenuItem, Product, NoteArticle } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'オーガニック・フェイシャル',
    description: '厳選されたオーガニックハーブを使用し、\n肌本来の力を引き出します。',
    price: 12000,
    duration: 60,
    category: 'Facial',
    details: {
      features: [
        '100%天然由来のオーガニックハーブ使用',
        '肌のバリア機能を高める鎮静効果',
        '合成香料・着色料不使用で敏感肌にも安心'
      ],
      steps: [
        'クレンジング（ハーブミルク）',
        'ゴマージュ（角質ケア）',
        'ハーブ蒸しタオル',
        'フェイシャルマッサージ',
        'オーガニックパック',
        'お仕上げ・保護'
      ]
    }
  },
  {
    id: '2',
    name: 'アロマ・ボディトリートメント',
    description: '植物の香りに包まれながら、\n心身の緊張を解きほぐす全身マッサージ。',
    price: 15000,
    duration: 90,
    category: 'Body',
    details: {
      features: [
        'その日の体調に合わせた精油のブレンド',
        'リンパの流れを整え、むくみを解消',
        '深いリラクゼーションによる睡眠の質向上'
      ],
      steps: [
        'カウンセリング・精油選び',
        'フットバス',
        '背面（脚・背中）のトリートメント',
        '前面（脚・お腹・腕）のトリートメント',
        'デコルテ・首のケア',
        'アフターティー'
      ]
    }
  },
  {
    id: '3',
    name: 'クレイ・デトックスパック',
    description: '天然クレイが毛穴の汚れを吸着し、\n透明感のある肌へ導きます。',
    price: 8000,
    duration: 45,
    category: 'Facial',
    details: {
      features: [
        'フランス産高品質クレイを使用',
        '毛穴の黒ずみ・くすみの解消',
        'ミネラル補給によるキメの改善'
      ],
      steps: [
        'ポイントメイクオフ',
        'クレイパック塗布',
        'リラックスタイム（ヘッドケア付）',
        'クレイオフ',
        '整肌・保湿'
      ]
    }
  },
  {
    id: '4',
    name: 'ヘッド＆ショルダー・リラクゼーション',
    description: 'デスクワークで疲れた頭と肩を\n重点的にケアします。',
    price: 6000,
    duration: 30,
    category: 'Relax',
    details: {
      features: [
        '眼精疲労の緩和',
        '首・肩のコリをピンポイントでケア',
        'お着替え不要で気軽に受けられる'
      ],
      steps: [
        '首・肩のほぐし',
        'ドライヘッドスパ',
        '頭皮のツボ押し',
        'ストレッチ'
      ]
    }
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'ハーブ・バスソルト',
    description: '死海の塩とドライハーブを贅沢に使用。リラックスタイムに。',
    price: 4800,
    image: '/images/product1.jpg',
    category: 'Skincare'
  },
  {
    id: 'p2',
    name: 'バスタブレット',
    description: '死海の塩とドライハーブを贅沢に使用。リラックスタイムに。',
    price: 2400,
    image: '/images/product2.jpg',
    category: 'Bodycare'
  },
  {
    id: 'p3',
    name: 'クレイ歯磨き粉',
    description: 'クレイの力でスッキリ',
    price: 1800,
    image: '/images/product3.jpg',
    category: 'Wellness'
  }
];

export const NOTES: NoteArticle[] = [
  {
    id: 'n1',
    title: '季節の変わり目、肌をいたわるセルフケア',
    excerpt: '春の訪れとともに、肌も敏感になりがちです。自宅でできる簡単なケアをご紹介します。',
    content: `
# 季節の変わり目のセルフケア

春は寒暖差や花粉の影響で、肌のバリア機能が低下しやすい季節です。
以下のポイントに気をつけて、健やかな肌を保ちましょう。

1. **丁寧な洗顔**: 摩擦を避け、たっぷりの泡で優しく。
2. **保湿の徹底**: 化粧水だけでなく、オイルやクリームで蓋を。
3. **内側からのケア**: ビタミンCを豊富に含むハーブティーがおすすめ。

当サロンでは、この時期にぴったりの「春のゆらぎ肌コース」もご用意しております。
    `,
    date: '2026.03.20',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
    author: 'Leaf & Stone'
  },
  {
    id: 'n2',
    title: '私たちが「クレイ」にこだわる理由',
    excerpt: '大地の恵みであるクレイ。その驚くべき美容効果についてお話しします。',
    content: `
# クレイの力

クレイ（泥）は、太古の昔から美容や健康に利用されてきました。
私たちが施術に使用しているクレイは、フランス産の高品質なものです。

- **吸着力**: 毛穴の奥の汚れや古い角質を取り除きます。
- **ミネラル補給**: 肌に必要なミネラルを届け、キメを整えます。

ぜひ一度、その心地よさを体感してください。
    `,
    date: '2026.02.15',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    author: 'Leaf & Stone'
  }
];
