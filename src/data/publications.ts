export type Publication = {
  type: string;
  language: string;
  title: string;
  details: string[];
  linkLabel?: string;
  url?: string;
};

export type PublicationSection = {
  id: string;
  title: string;
  navLabel: string;
  items: Publication[];
};

export const publicationSections: PublicationSection[] = [
  {
    id: "books",
    title: "Books",
    navLabel: "Books",
    items: [
      {
        type: "Book",
        language: "English",
        title:
          "More-Than People’s Communes: Veterinary Workers and Nonhuman Animals in Mao-Era China",
        details: [
          "Jongsik Christian Yi. Under contract with the University of Chicago Press, 2022.",
        ],
        // linkLabel: "View Publisher Site",
      },
      {
        type: "Book",
        language: "Korean",
        title: "Chinese Science and Technology in the Long Twentieth Century",
        details: ["Jongsik Christian Yi (work in progress)"],
      },
      {
        type: "Book",
        language: "Korean",
        title: "Seeing and Thinking Like a Historian",
        details: ["Jongsik Christian Yi (work in progress)"],
      },
      {
        type: "Book",
        language: "Korean",
        title: "What Science Leaves Behind, What It Erases",
        details: ["Jongsik Christian Yi. Under contract with Miraebook"],
      },
      {
        type: "Book",
        language: "Korean",
        title: "History 101 for STEM Majors [공대생을 위한 역사학 강의]",
        details: ["Jongsik Christian Yi. Nermer Books, forthcoming."],
      },
      {
        type: "Book",
        language: "Korean",
        title:
          "Animal History: The Birth of the Modern People who Love and Hate Animals [벌거벗은 동물사: 동물을 사랑하고 혐오하는 현대인의 탄생]",
        details: ["Jongsik Christian Yi. East Asia Books, 2024."],
        linkLabel: "View Publisher Site",
        url: "https://product.kyobobook.co.kr/detail/S000213544819",
      },
    ],
  },
  {
    id: "book-chapters",
    title: "Book Chapters",
    navLabel: "Book Chapters",
    items: [
      {
        type: "Book Chapter",
        language: "English",
        title: "Lyuh Woon-hyung and Khüree the City of Red Giant",
        details: [
          "In Overlapping Borderlands, eds. Loretta Kim and Anran Wang.",
          "Jongsik Christian Yi (work in progress).",
        ],
        // linkLabel: "View Publisher Site",
      },
      {
        type: "Book Chapter",
        language: "English",
        title: "Pig Breeding and Sexual Taboos in the Early People’s Republic",
        details: [
          "In China's Environmental History: A Reader, eds. Brian Lander and Peter Lavelle. Columbia University Press.",
          "Jongsik Christian Yi (forthcoming in December 2026).",
        ],
        linkLabel: "View Publisher Site",
        url: "https://cup.columbia.edu/book/chinas-environmental-history/9780231219662/",
      },
      {
        type: "Book Chapter",
        language: "English",
        title:
          "Possibilities and Limitations of Mass Science: Hydrobiologist Nie Dashu and the Making of Knowledge on Fish Diseases Before the Great Leap",
        details: [
          "In A Revolution Across Arts and Sciences: Participatory Knowledge Production in China’s Great Leap Forward, eds. Christine Ho and Sigrid Schmalzer. Hong Kong University Press.",
          "Jongsik Christian Yi. Hong Kong University Press, 2026.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://hkupress.hku.hk/Subject/history?product_id=1749&limit=20",
      },
      {
        type: "Book Chapter",
        language: "Korean",
        title:
          "Animals, Environments, and the History of Science in Korea [동물, 환경, 그리고 한국 과학사]",
        details: [
          "Manyong Moon, Sang-ho Ro, Jongsik Christian Yi, et al. Sol Science, 2025.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=368905039",
      },
      {
        type: "Book Chapter",
        language: "Korean",
        title:
          "The Structure of the Long Cold War and Its Knowledge Apparatus [장기 냉전 구조와 지식 기제]",
        details: [
          "Donghyuk Kim, Jongsik Christian Yi, et al. GIST Press, 2025.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=364880372&start=slayer",
      },
    ],
  },
  {
    id: "journal-articles",
    title: "Journal Articles",
    navLabel: "Journal Articles",
    items: [
      {
        type: "Articles",
        language: "English",
        title:
          "The Development of Modern East Asian History of Science and Technology and the Prospects for Korean Studies [근현대 동아시아 과학기술사의 전개와 한국학의 전망]",
        details: [
          "Jongsik Christian Yi, Ho-Chul Seo, Youjung Shin et al. Korean Studies Quarterly, Vol. 49, No. 2 (June 2026): 257-313.",
        ],
        linkLabel: "View Article",
        url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003344073",
      },
      {
        type: "Articles",
        language: "English",
        title:
          "Maoist Pigs: Swine, Communes, and the State in Rural China, 1949–1976",
        details: [
          "Jongsik Christian Yi. Journal of Asian Studies, Vol. 85, No. 2 (May 2026): 287–311.",
        ],
        linkLabel: "View Article",
        url: "https://doi.org/10.1215/00219118-12257581",
      },
      {
        type: "Articles",
        language: "English",
        title:
          "Rabbit Spleen and Medicinal Herbs: Animal Infectious Diseases, Grassroots Communes, and the State in Maoist China",
        details: [
          "Jongsik Christian Yi. Bulletin of the History of Medicine, Vol. 98, No. 2 (Summer 2024): 298–325.",
        ],
        linkLabel: "View Article",
        url: "https://muse.jhu.edu/pub/1/article/937507",
      },
      {
        type: "Articles",
        language: "English",
        title:
          "Decolonization and Self-Reflection: Teaching the Korean History of Science in South Korea",
        details: [
          "Jongsik Christian Yi. Historical Studies in the Natural Sciences, Vol. 54, No. 1 (February 2024): 121–124.",
        ],
        linkLabel: "View Article",
        url: "https://online.ucpress.edu/hsns/article-abstract/54/1/121/200191/Decolonization-and-Self-ReflectionTeaching-the?redirectedFrom=fulltext",
      },
      {
        type: "Articles",
        language: "English",
        title:
          "Dialectical Materialism Serves Voluntarist Productivism: The Epistemic Foundation of Lysenkoism in Socialist China and North Vietnam",
        details: [
          "Jongsik Christian Yi. Journal of the History of Biology, Vol. 54, No. 3 (September 2021): 513–539.",
        ],
        linkLabel: "View Article",
        url: "https://link.springer.com/article/10.1007/s10739-021-09652-7",
      },
      {
        type: "Articles",
        language: "English",
        title: "Conference Report on the Mr. Science, May Fourth, and Modern China Workshop",
        details: [
          "Jongsik Christian Yi. Bulletin of the Pacific Circle, No. 43 (October 2019).",
        ],
        linkLabel: "View Article",
        url: "http://thepacificcircle.com/wp-content/uploads/Bulletin-of-the-Pacific-Circle-43-October-2019.pdf",
      },
      {
        type: "Articles",
        language: "Korean",
        title:
          "What Is Animal History?: On Recent Anglophone Historiography [동물사의 문제의식과 서사 전략: 영어권 연구 동향을 중심으로]",
        details: [
          "Jongsik Christian Yi. Yoksa Hakbo: The Korean Historical Review, 265 (March 2025): 505–540.",
        ],
        linkLabel: "View Article",
        url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003192340",
      },
      {
        type: "Articles",
        language: "Korean",
        title:
          "Making a “Korean Caltech”: Physicist Hogil Kim, Yonam Institute of Technology, and Pohang University of Science and Technology, 1972-1994 [대학교수들을 위한 연구 “왕국” 만들기: 물리학자 김호길의 연암공학원 및 포항공과대학 구상과 건학]",
        details: [
          "Jongsik Christian Yi. Korean Journal for the History of Science, Vol. 46, No. 1 (April 2024): 203–233.",
        ],
        linkLabel: "View Article",
        url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003076772",
      },
      {
        type: "Articles",
        language: "Korean",
        title:
          "Peanut Hulls, Swine Feces, and Silver Carps: Eating, Excreting, and Communal Metabolism in 1950s Guangxi [코뮨은 무엇으로 사는가?―1950년대 중국 광시 지역 농촌 공동체의 물질대사]",
        details: [
          "Jongsik Christian Yi. Critical Review of History, Vol. 145 (November 2023): 209–236.",
        ],
        linkLabel: "View Article",
        url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART003021872",
      },
      {
        type: "Articles",
        language: "Korean",
        title:
          "In a Spectrum between Self-Denial and Self-Assertion: A Reading of the Histories of Science, Technology, and Medicine in Twentieth-Century China [20세기 중국 과학사·기술사·의학사 독법(讀法): 자기 부정과 자기 재생산을 양극으로 하는 하나의 스펙트럼 안에서]",
        details: [
          "Jongsik Christian Yi. Journal of Asiatic Studies, Vol. 64, No. 2 (June 2021): 41–87.",
        ],
        linkLabel: "View Article",
        url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002731371",
      },
      {
        type: "Articles",
        language: "Korean",
        title:
          "Scientific Needles for Livestock Animals in Communes: The Birth of Traditional Chinese Veterinary Medicine in Maoist China, 1956-1963 [집체(集體)의 가축을 위한 침술의 과학: 마오쩌둥 시기 중수의학의 탄생, 1956-1963]",
        details: [
          "Jongsik Christian Yi. Korean Journal for the History of Science, Vol. 43, No. 1 (April 2021): 143–174.",
        ],
        linkLabel: "View Article",
        url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002712190",
      },
    ],
  },
  {
    id: "translations",
    title: "Translations",
    navLabel: "Translations",
    items: [
      {
        type: "Translation",
        language: "Korean Edition",
        title: "American Higher Education since World War II: A History",
        details: [
          "Original Work: Roger L. Geiger. Princeton University Press, 2021.",
          "Translated by: TBA, edited and introduced by Jongsik Christian Yi. Gyoyu Books, forthcoming.",
        ],
      },
      {
        type: "Translation",
        language: "Korean Edition",
        title: "The End of Concern: Maoist China, Activism, and Asian Studies",
        details: [
          "Original Work: Fabio Lanza. Duke University Press, 2017.",
          "Translated by: Jaehee Seol and Jongsik Christian Yi. Geulhangari, forthcoming in July 2026",
        ],
      },
      {
        type: "Translation",
        language: "Korean Edition",
        title: "Spectacles of Waste",
        details: [
          "Original Work: Warwick Anderson. Polity, 2024.",
          "Translated by: Jungha Hwang and Jongsik Christian Yi. May Books, forthcoming in July 2026.",
        ],
      },
      {
        type: "Translation",
        language: "Korean Edition",
        title: "Becoming MIT: Moments of Decision",
        details: [
          "Original Work: David Kaiser ed. MIT Press, 2010.",
          "Translated by: Taebok Roh, edited and introduced by Jongsik Christian Yi. Red Salt Books, 2026.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://aladin.co.kr/shop/wproduct.aspx?ItemId=391000730&start=pcsearch_auto",
      },
      {
        type: "Translation",
        language: "Korean Edition",
        title: "Empires of Ideas: Creating the Modern University from Germany to America to China",
        details: [
          "Original Work: William C. Kirby. Harvard University Press, 2022.",
          "Translated by: Hyunjeong Lim, edited and introduced by Jongsik Christian Yi. Red Salt Books, 2026.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://product.kyobobook.co.kr/detail/S000219333248",
      },
      {
        type: "Translation",
        language: "Korean Edition",
        title: "Postcolonial STS and Asia as Method",
        details: [
          "Original Work: Warwick Anderson. 2025.",
          "Selected and translated by: Jongsik Christian Yi. Eum, 2025.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=376105161",
      },
      {
        type: "Translation",
        language: "Korean Edition",
        title: "Red Revolution, Green Revolution: Scientific Farming in Socialist China",
        details: [
          "Original Work: Sigrid Schmalzer. University of Chicago Press, 2016.",
          "Translated by: Jongsik Christian Yi and Jiho Moon. Purunyoksa Publishing Co., 2025.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=368677887",
      },
      {
        type: "Translation",
        language: "Korean Edition",
        title: "Carbon Technocracy: Energy Regimes in Modern East Asia",
        details: [
          "Original Work: Victor Seow. University of Chicago Press, 2022.",
          "Translated by: Jongsik Christian Yi. Red Salt Books, 2024.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=338274204",
      },
      {
        type: "Translation",
        language: "Korean Edition",
        title: "Lysenko's Ghost: Epigenetics and Russia",
        details: [
          "Original Work: Loren Graham. Harvard University Press, 2016.",
          "Translated by: Jongsik Christian Yi. East Asia Books, 2021.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://blog.naver.com/dongasiabook/222552134374",
      },
      {
        type: "Translation",
        language: "Korean Edition",
        title: "Social Injustice and Public Health",
        details: [
          "Original Work: Barry S. Levy and Victor W. Sidel. Oxford University Press, 2nd ed, 2013.",
          "Translated by: Young-jeon Shin, Jongsik Christian Yi, et al. Hanul, 2021.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://blog.naver.com/hanulnew/222536481338?trackingCode=blog_bloghome_searchlist",
      },
    ],
  },
  {
    id: "book-reviews",
    title: "Book Reviews",
    navLabel: "Book Reviews",
    items: [
      {
        type: "Review",
        language: "Korean",
        title: "Review of Lonely Ideas: Can Russia Compete?",
        details: [
          "Original Work: Loren Graham. Korean trans. Dong-hyuk Kim and Seung-cheol Heo, GIST Press, 2025.",
          "Reviewed in: Science, Technology, and Society, Vol. 10 (June 2026): 344-352.",
        ],
        linkLabel: "View Publisher Site",
        url: "",
      },
      {
        type: "Review",
        language: "English",
        title: "Review of Human-Animal Relations and the Hunt in Korea and Northeast Asia",
        details: [
          "Original Work: George L. Kallander. Edinburgh University Press, 2023.",
          "Reviewed in: Animal History, Vol. 1, No. 2 (June 2025): 87-89.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://doi.org/10.1525/ah.2024.2454435",
      },
      {
        type: "Review",
        language: "English",
        title:
          "Review of Technoscience of Tak and Artisans: Resourceful Evolution of Chosŏn Papermaking",
        details: [
          "Original Work: Jung Lee. Purunyoksa Publishing Co., 2023.",
          "Reviewed in: The Korean Journal for the History of Science, Vol. 45, No. 2 (August 2023): 413-417.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?sereArticleSearchBean.artiId=ART002993574",
      },
      {
        type: "Review",
        language: "Korean",
        title: "Review of Histoire du traitement de la mélancolie [History of the Treatment of Melancholy]",
        details: [
          "Original Work: Jean Starobinski. Korean trans. Younguk Kim. ITTA, 2023.",
          "Reviewed in: Korean Science, Technology, and Society Network ed., Science, Technology, and Society, Vol. 4, Goyang: Aleph Books, 2023.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11492532",
      },
      {
        type: "Review",
        language: "Korean",
        title: "Review of A Cultural History of Heredity",
        details: [
          "Original Work: Hans-Jörg Rheinberger and Staffan Müller-Wille. Korean trans. Jaehwan Hyun, Pusan National University Press, 2022",
          "Reviewed in: The Korean Journal of Medical History, Vol. 32, No. 1 (April 2023): 423-433.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://www.medhist.or.kr/journal/view.php?number=2443",
      },
      {
        type: "Review",
        language: "English",
        title: "Review of Knowledge Production in Mao-Era China: Learning from the Masses",
        details: [
          "Original Work: Rui Kunze and Marc Andre Matten. Lexington Books, 2021.",
          "Reviewed in: East Asian Science, Technology and Society: An International Journal, Vol. 16, No. 3 (August 2022): 445-447.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://www.tandfonline.com/doi/full/10.1080/18752160.2022.2096816",
      },
      {
        type: "Review",
        language: "Korean",
        title: "Review of Carbon Technocracy: Energy Regimes in Modern East Asia",
        details: [
          "Original Work: Victor Seow. University of Chicago Press, 2022.",
          "Reviewed in: The Korean Journal for the History of Science, Vol. 44, No. 1 (April 2022): 213-220.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://www.kci.go.kr/kciportal/ci/sereArticleSearch/ciSereArtiView.kci?fbclid=IwAR0tofwnzAp-XBdNslSO93_s46G-aYJlcy1YaTrFV37NwpGCNE-PyvIs9AM&sereArticleSearchBean.artiId=ART002836301",
      },
      {
        type: "Review",
        language: "English",
        title: "Review of Mao's Bestiary: Medicinal Animals and Modern China",
        details: [
          "Original Work: Liz P. Y. Chee, Duke University Press, 2021.",
          "Reviewed in: History: The Journal of the Historical Association, Vol. 106, No. 373 (December 2021): 871-872.",
        ],
        linkLabel: "View Publisher Site",
        url: "https://doi.org/10.1111/1468-229X.13231",
      },
    ],
  },
  {
    id: "public-writing",
    title: "Public Writings",
    navLabel: "Public Writings",
    items: [
      {
        type: "Op-ed",
        language: "Korean",
        title:
          "The Legacies of Fang Lizhi [과학과 민주의 길, 팡리즈의 유산]",
        details: ["Jongsik Christian Yi. Hankyoreh, July 17, 2026."],
        linkLabel: "View Online",
        url: "",
      },
      {
        type: "Interview",
        language: "Korean",
        title:
          "중국 남부 홍수 피해 키운 ‘자력갱생’ 치수 정책…류란저수지 제방 붕괴에 당국 초긴장",
        details: ["Interview with The Kyunghyang Shinmun. July 8, 2026."],
        linkLabel: "View Online",
        url: "https://www.khan.co.kr/article/202607081740001?fbclid=IwY2xjawS7A1dleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeSOxj5DIcXevHJd8nqBbsmVmD1l5yTEN7dmwY7pRDbH722hnyiU5qO7e1T5U_aem_pyK4NcWPztML7xvwAx53rQ",
      },
      {
        type: "Op-ed",
        language: "Korean",
        title:
          "What Do You Know about Qian Xuesen? [중국 ‘로켓왕’ 첸쉐썬을 아십니까?]",
        details: ["Jongsik Christian Yi. Hankyoreh, June 18, 2026."],
        linkLabel: "View Online",
        url: "https://www.hani.co.kr/arti/opinion/column/1264250.html",
      },
      {
        type: "Op-ed",
        language: "Korean",
        title:
          "After China’s Scientific Rise #1: Can Shanzhai Lift the China Dream? [이종식의 중국 과학굴기 너머 01: ‘산자이’는 중국몽의 지렛대가 될까]",
        details: ["Jongsik Christian Yi. Hankyoreh, May 22, 2026."],
        linkLabel: "View Online",
        url: "https://www.hani.co.kr/arti/opinion/column/1259917.html?fbclid=IwY2xjawR99_lleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeO8D4843a9SVlKlmGhm9yEgCvDioqYMLThgNk8B0pgSihORC8k6nluw3B8zU_aem_BBMrdPAgYNtTyGpNQ3-Neg",
      },
      {
        type: "Interview",
        language: "Korean",
        title: "Documentary Insight: China Speed [인재전쟁2: 1부 차이나 스피드]",
        details: ["Interview with KBS 1TV. May 14, 2026."],
        linkLabel: "View Online",
        url: "https://www.youtube.com/watch?v=0-nPEj6euio&t=101s",
      },
      {
        type: "Interview",
        language: "Korean",
        title: "양자컴 교수에 교육부 맡겼다… ‘딥시크 쇼크’ 中 혁신의 비밀",
        details: ["Interview with The JoongAng Daily. January 21, 2026."],
        linkLabel: "View Online",
        url: "https://www.joongang.co.kr/article/25398914?fbclid=IwY2xjawPeeHVleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeCjFghdLx0zO85qIvL1avHU7SvV4KhwVgScy2o1OFC8xW8pxztkSmE3p8KBU_aem_XiUe9enbpSxjB2oT7Pdjyg",
      },
      {
        type: "Public Essay",
        language: "Korean",
        title:
          "There Is No Such Thing as “Western Science”; Nor, Perhaps, Is There Chinese Science, Indian Science, or Korean Science [서양과학은 없다, 어쩌면 중국과학, 인도과학, 한국과학도]",
        details: ["Jongsik Christian Yi. University In & Out, January 18, 2026."],
        linkLabel: "View Online",
        url: "https://www.unipress.co.kr/news/articleView.html?idxno=13877",
      },
      {
        type: "Interview",
        language: "Korean",
        title:
          "‘빨리, 많이’ AI 인재 양성한다는 이 정부… 경제적 보상, 직업 안정성 등 과학자 존중받는 서사 필요 [마가와 굴기 넘어②]",
        details: ["Interview with The Kyunghyang Shinmun. January 6, 2026."],
        linkLabel: "View Online",
        url: "https://www.khan.co.kr/article/202601060600031",
      },
      {
        type: "Op-ed",
        language: "Korean",
        title:
          "What Do Chinese Science and Technology Mean in South Korea After the ‘DeepSeek Shock’? (2) [우리에게 중국 과학기술은 무엇인가? (2)]",
        details: ["Jongsik Christian Yi. The JoongAng Daily, December 2, 2025."],
        linkLabel: "View Online",
        url: "https://www.joongang.co.kr/article/25386766",
      },
      {
        type: "Op-ed",
        language: "Korean",
        title:
          "What Do Chinese Science and Technology Mean in South Korea After the ‘DeepSeek Shock’? (1) [우리에게 중국 과학기술은 무엇인가? (1)]",
        details: ["Jongsik Christian Yi. The JoongAng Daily, November 25, 2025."],
        linkLabel: "View Online",
        url: "https://www.joongang.co.kr/article/25384926",
      },
      {
        type: "Interview",
        language: "Korean",
        title: "“넘어지면 어때요, 계속 발전할 건데” 로봇올림픽에서 본 중국 과학기술의 진짜 힘",
        details: ["Interview with The Kyunghyang Shinmun. August 17, 2025."],
        linkLabel: "View Online",
        url: "https://www.khan.co.kr/article/202508171339001",
      },
      {
        type: "Public Essay",
        language: "Korean",
        title: "What Do You Know about Lysenko? [‘유사과학자’ 리센코를 아십니까?]",
        details: [
          "Jongsik Christian Yi. Horizon: The Online Magazine of Korea Institute for Advanced Study (KIAS), May 15, 2025.",
        ],
        linkLabel: "View Online",
        url: "https://horizon.kias.re.kr/31550/",
      },
      {
        type: "Op-ed",
        language: "Korean",
        title: "The Historical Roots of China’s DeepSeek [딥시크의 중국, 과학기술계 ‘졸부’가 아니다]",
        details: ["Jongsik Christian Yi. Hankyoreh, April 18, 2025."],
        linkLabel: "View Online",
        url: "https://www.hani.co.kr/arti/opinion/column/1193050.html",
      },
      {
        type: "Public Essay",
        language: "Korean",
        title: "Mao Zedong’s Philosophy of Science and Its Impact [마오의 과학관과 그 영향]",
        details: ["Jongsik Christian Yi. EPI: The Science Magazine, Vol. 31, Spring 2025."],
        linkLabel: "View Online",
        url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=360793228",
      },
      {
        type: "Interview",
        language: "Korean",
        title: "Talking Animals with Jongsik Christian Yi",
        details: ["Interview with Chinese Animal Studies Network. February 25, 2025."],
        linkLabel: "View Online",
        url: "https://chineseanimalstudiesnetwork.com/talking-animals-with-jongsik-christian-yi/",
      },
      {
        type: "Public Essay",
        language: "Korean",
        title:
          "Of Scientists, by Scientists, and for Scientists: Pohang University of Science and Technology at 40 [제2의 건학에 즈음하여 되돌아본 우리대학의 역사]",
        details: ["Jongsik Christian Yi. The Postech Times, June 12, 2024."],
        linkLabel: "View Online",
        url: "http://times.postech.ac.kr/news/articleView.html?idxno=23207",
      },
      {
        type: "Public Essay",
        language: "Korean",
        title: "A Way of Learning, A Way of Growing [배움의 길, 성장의 길]",
        details: ["Jongsik Christian Yi. Postechian, Vol. 181, April 2024."],
        linkLabel: "View Online",
        url: "https://www.postech.ac.kr/kor/newscenter/postechian_list.do?mode=view&articleNo=10569&article.offset=48&articleLimit=12",
      },
      {
        type: "Public Essay",
        language: "Korean",
        title:
          "Miracles and Flames: The Stories of Pohang Iron and Steel’s 135 Days of Recovery from Typhoon Hinnamnor [함께 만든 기적, 꺼지지 않는 불꽃: 불가능을 가능케 한 포스코 재난극복 135일의 이야기]",
        details: ["Sang Joon Park, Jongsik Christian Yi, et al. Nanam, 2023."],
        linkLabel: "View Online",
        url: "https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=313149790&start=slayer",
      },
      {
        type: "Public Essay",
        language: "Korean",
        title: "The Difficulties of a New Instructor [초보 교수자의 어려움]",
        details: ["Jongsik Christian Yi. The Postech Times, November 13, 2022."],
        linkLabel: "View Online",
        url: "http://times.postech.ac.kr/news/articleView.html?idxno=22314",
      },
      {
        type: "Public Essay",
        language: "Korean",
        title: "When and How Did Pandemics End? [팬데믹은 언제 어떻게 끝날까?]",
        details: [
          "Jongsik Christian Yi. The Bulletin of National Museum of Korean Contemporary History, September 1, 2022.",
        ],
        linkLabel: "View Online",
        url: "https://www.much.go.kr/webzine/vol42/sub/sub2.html",
      },
      {
        type: "Public Essay",
        language: "Korean",
        title: "Arthdal Chronicles, Sorcery, Superstition, and Science [‘아스달 연대기’와 마법, 미신, 그리고 과학]",
        details: ["Jongsik Christian Yi. Behind Sciences, Vol. 8, March 2020."],
        linkLabel: "View Online",
        url: "https://behindsciences.kaist.ac.kr/2020/03/20/%ec%99%80-%eb%a7%88%eb%b2%95-%eb%af%b8%ec%8b%a0-%ea%b7%b8%eb%a6%ac%ea%b3%a0-%ea%b3%bc%ed%95%99/",
      },
    ],
  },
];

export const totalPublicationCount = publicationSections.reduce(
  (count, section) => count + section.items.length,
  0,
);
