window.RESTAURANT_GUIDE = {
  meta: {
            dietaryRules: [
      {
        id: "no-meat-fish",
        title: "無肉、無魚、無柴魚高湯",
        hint: "台灣素食團體通用說法",
        japanese: ["私たちは台湾の素食です。", "肉、魚、魚介類、鰹だしを食べません。", "卵・乳製品・五辛は大丈夫です。"]
      },
      {
        id: "scallion-garlic-ok",
        title: "五辛素",
        hint: "可吃蔥、蒜、洋蔥、韭菜",
        japanese: ["ネギ、ニンニク、玉ねぎ、ニラは食べられます。"]
      },
      {
        id: "allium-free",
        title: "五辛不吃",
        hint: "請連同四種辛香料一起去除",
        japanese: ["ネギ、ニンニク、玉ねぎ、ニラも抜いてください。"]
      },
      {
        id: "vegan",
        title: "Vegan",
        hint: "不使用動物性食材",
        japanese: ["動物性の食材を使わないヴィーガン料理をお願いします。"]
      }
    ]
  },
  days: {
    day1: {
      meals: [
        {
          id: "day1-lunch",
          label: "午餐",
          time: "12:00–13:30",
          location: "瀨長島 Umikaji Terrace",
          fit: "時段適配",
          strategy: "SEE THE SEA ＞ A Happy Pancake ＞ POSILLIPO；A Happy Pancake 須兩週前預約。",
          options: [
            {
              rank: "①首選",
              name: "SEE THE SEA",
              rating: "★4.6",
              dietary: "Plant-Based／Vegan",
              address: "沖縄県豊見城市瀬長174-6 ウミカジテラス #41",
              phone: "098-996-4640",
              hours: "週五 11:00–21:00 涵蓋午餐",
              highlights: ["植物性タコライス", "紅芋タコス", "免預約"],
              detail: "島上唯一明確 plant-based／gluten-free 的餐廳。",
              caution: "假日可能候位，建議 12:00 準時抵達；8 人團體座位現場詢問店員。",
              instagram: "https://www.instagram.com/seetheseaokinawa/",
              query: "SEE THE SEA 瀨長島"
            },
            {
              rank: "②",
              name: "A Happy Pancake",
              rating: "★4.2",
              dietary: "蛋奶素",
              address: "沖縄県豊見城市瀬長174-6 #32",
              phone: "098-851-0009",
              hours: "週五 11:00–21:00（鹹鬆餅僅供應至 14:30）",
              highlights: ["水果舒芙蕾厚鬆餅", "親子友善"],
              detail: "鬆餅為蛋奶素；親子友善、幼兒接受度高。",
              caution: "需兩週前預約，未預約極可能撲空；8 人建議分桌或先電話確認。",
              website: "http://magia.tokyo/",
              query: "A Happy Pancake 瀨長島"
            },
            {
              rank: "③",
              name: "POSILLIPO",
              rating: "★4.3",
              dietary: "南義料理",
              address: "瀨長174-5（Umikaji Terrace 旁獨立店面）",
              phone: "098-851-1101",
              hours: "週五午餐 11:30–15:30",
              highlights: ["瑪格麗特披薩", "番茄義大利麵", "海景氣氛"],
              detail: "瑪格麗特披薩、番茄義大利麵等無肉選項；海景氣氛好。",
              caution: "價位偏高，8 人建議提前訂位；點餐時確認醬汁無魚介高湯。",
              website: "https://www.huge.co.jp/restaurant/posillipo/posillipo",
              query: "POSILLIPO cucina meridionale 瀨長島"
            }
          ]
        },
        {
          id: "day1-dinner",
          label: "晚餐",
          time: "19:30–21:00",
          location: "本部町 Hanasaki Marche 周邊",
          fit: "PDF v16 時段適配",
          strategy: "海邦丸提前預約客製為主線；喜菜ハウス瀬底為備案（先確認營業時間）。",
          options: [
            {
              rank: "①首選",
              name: "海人料理 海邦丸",
              rating: "★4.7",
              dietary: "海鮮餐廳；需客製",
              address: "本部町山川1421-1（Hanasaki Marche 館內，住宿隔壁、步行可達）",
              phone: "0980-48-3343",
              hours: "週五 11:30–15:00／17:30–21:00（週四店休）",
              highlights: ["本區評分最高", "住宿隔壁步行可達"],
              detail: "Hanasaki Marche 館內，住宿隔壁、步行可達，本區評分最高。",
              caution: "海鮮餐廳，素食靠預約時客製；務必提前數天電話訂位並說明素食需求。",
              instagram: "https://www.instagram.com/kaihoumaru2/",
              query: "海人料理 海邦丸 本部町"
            },
            {
              rank: "②",
              name: "喜菜ハウス瀬底",
              rating: "★4.2",
              dietary: "純素餐廳",
              address: "本部町瀬底（瀨底島，距 Hanasaki Marche 車程約 15 分鐘）",
              hours: "營業時間未確認",
              highlights: ["本部町少數純素餐廳"],
              detail: "本部町少數純素餐廳。",
              caution: "營業時間未確認，出發前務必電話確認營業時間與 8 人座位。",
              query: "喜菜ハウス瀬底 本部町"
            },
            {
              rank: "③備案",
              name: "Pizzeria Ukauka",
              rating: "HappyCow 3.5",
              dietary: "義式披薩",
              address: "本部町瀬底2281-1（瀨底島，車程約 10–15 分鐘）",
              phone: "0980-47-4774",
              hours: "週五 11:30–16:00／18:30–21:00（建議再確認）",
              highlights: ["vegan marinara pizza", "海景披薩店"],
              detail: "HappyCow 記載 vegan marinara pizza 的海景披薩店。",
              caution: "HappyCow 3.5，僅列備案；電話確認當日晚間營業與 8 人座位。",
              instagram: "https://www.instagram.com/pizzeriaukauka",
              query: "Pizzeria Ukauka 瀨底島"
            }
          ]
        }
      ]
    },
    day2: {
      meals: [
        {
          id: "day2-lunch",
          label: "午餐",
          time: "14:00–15:30",
          location: "古宇利島",
          fit: "離館後承接",
          strategy: "L LOTA ＞ Earthful Burger ＞ アイタル食堂。",
          options: [
            {
              rank: "①首選",
              name: "Restaurant L LOTA",
              rating: "★4.7",
              dietary: "創作料理・野菜料理",
              address: "今帰仁村古宇利466-1（One Suite Hotel & Resort 內）",
              phone: "0980-51-5031",
              hours: "午餐 12:00–15:30（L.O. 14:30），週四定休；12/19（六）正常營業",
              highlights: ["有機蔬菜", "全席海景", "兒童椅"],
              detail: "古宇利地產有機蔬菜，廚師可配合調整；全席海景、有兒童椅。午餐約 ¥3,000–3,999／人。",
              caution: "14:00 抵達距 L.O. 僅 30 分鐘，務必事先訂位並註明素食＋爭取提早入座。",
              instagram: "https://www.instagram.com/onesuite_llota_kouri",
              query: "Restaurant L LOTA 古宇利島"
            },
            {
              rank: "②",
              name: "Earthful Burger",
              rating: "新店",
              dietary: "100%植物性漢堡",
              address: "今帰仁村謝名449-3（古宇利島車程約 10 分鐘）",
              hours: "土・日 11:00–16:00 涵蓋午餐",
              highlights: ["100%植物性全素漢堡", "長壽沖繩概念店"],
              detail: "100%植物性全素漢堡（おから蒟蒻肉餅）；單價約 ¥1,600–1,960／個。",
              caution: "僅 15 席，8 人務必提前 IG 預約。",
              instagram: "http://www.instagram.com/earthfulcafe",
              query: "Earthful Burger 今帰仁村"
            },
            {
              rank: "③備案",
              name: "アイタル食堂",
              rating: "",
              dietary: "素食食堂（順路）",
              address: "名護市宇茂佐1635-1（離島後往本部順路）",
              hours: "土曜 11:00–15:30",
              highlights: ["整間店都吃素", "北部少數正餐選擇"],
              detail: "Ital 牙買加素食概念；北部少數整間吃素的正餐選擇。",
              caution: "行前以 IG 確認當日營業與團體座位。",
              instagram: "https://instagram.com/ital_syokudou",
              query: "アイタル食堂 名護"
            }
          ]
        },
        {
          id: "day2-dinner",
          label: "晚餐",
          time: "18:00",
          location: "本部町（阿拉馬海納附近）",
          fit: "已訂主方案",
          strategy: "TO-PU（有ベジタリアンメニュー）為主；涮涮鍋備案先訂位並指定昆布鍋底。",
          options: [
            {
              rank: "①首選",
              name: "沖縄料理と島どうふ TO-PU",
              rating: "★4.6",
              dietary: "ベジタリアンメニューあり",
              address: "本部町浜元233",
              phone: "050-1039-1527",
              hours: "水–日 11:00–15:00、17:00–21:00（晚餐 L.O. 20:00），週二定休；12/19（六）正常營業",
              highlights: ["島豆腐專門店", "親子友善（兒童椅）", "半個室可接 8 人"],
              detail: "島豆腐專門店；42 席＋半個室可接 8 人，親子友善（兒童椅）。",
              caution: "沖縄そば湯頭通常含鰹だし，點餐時確認湯頭，改點島豆腐定食或素食品項；僅收現金；建議訂位。",
              instagram: "https://www.instagram.com/topu.okinawa/",
              query: "沖縄料理と島どうふ TO-PU 本部町"
            },
            {
              rank: "②",
              name: "沖縄しゃぶしゃぶ もとぶ美ら海店",
              rating: "",
              dietary: "葷素共桌",
              address: "本部町浜元335-1 ワンダーランド北棟 2-A",
              phone: "050-1725-9775",
              hours: "11:00–23:00（每日）涵蓋晚餐",
              highlights: ["昆布湯底涮蔬菜", "方便幼兒分食"],
              detail: "葷素共桌：素食者用昆布湯底涮蔬菜、豆腐、菇類，方便幼兒分食。",
              caution: "建議訂位並先告知素食人數與「昆布だし希望」。",
              instagram: "https://www.instagram.com/churaumi_nikusho/",
              query: "沖縄しゃぶしゃぶ もとぶ美ら海店"
            },
            {
              rank: "③條件式",
              name: "喜菜ハウス瀬底",
              rating: "",
              dietary: "純素（條件式）",
              address: "本部町瀬底",
              hours: "營業時間未確認",
              highlights: ["本部町唯一純素餐廳"],
              detail: "本部町唯一純素餐廳。",
              caution: "僅在電話確認有營業後才列入。",
              query: "喜菜ハウス瀬底"
            }
          ]
        }
      ]
    },
    day3: {
      meals: [
        {
          id: "day3-b-lunch",
          label: "B隊午餐",
          time: "12:30",
          location: "名護市區",
          fit: "B隊名護午餐",
          strategy: "アイタル食堂 ＞ ナカラマサラ ＞ 農家の台所 楽家；星數請以 Google Maps 實查。",
          options: [
            {
              rank: "①首選",
              name: "アイタル食堂",
              rating: "",
              dietary: "Vegetarian／Vegan",
              address: "名護市宇茂佐1635-1",
              hours: "週日 11:00–15:30 涵蓋午餐",
              highlights: ["名護市區素食定位明確", "溝通風險最低"],
              detail: "名護市區素食定位明確的餐廳，溝通風險最低。",
              caution: "小店，8 人務必事前 IG DM 訂位；再確認 12/20 是否營業。",
              instagram: "https://instagram.com/ital_syokudou",
              query: "アイタル食堂 名護市宇茂佐"
            },
            {
              rank: "②",
              name: "ナカラマサラ",
              rating: "",
              dietary: "印度咖哩 Vegan friendly",
              address: "名護市大南2-4-12 1階",
              hours: "週日 8:00–15:00（週二・週四定休）",
              highlights: ["豆咖哩", "野菜咖哩純素選項"],
              detail: "豆咖哩、野菜咖哩純素選項固定供應；湯底多為蔬菜／豆類。",
              caution: "廚房有魚類食材，點「野菜カレー／豆カレー」並出示素食溝通用語；8 人提前 IG 訂位。",
              instagram: "https://instagram.com/nakara_masala",
              query: "ナカラマサラ 名護"
            },
            {
              rank: "③備援",
              name: "農家の台所 楽家",
              rating: "",
              dietary: "蕎麥粉可麗餅",
              address: "名護市屋部30-3",
              hours: "週日 12:00–15:00（建議 13:00 前入座）",
              highlights: ["起司＋野菜版本可麗餅", "農家直營氣氛"],
              detail: "蕎麥粉可麗餅專門店，可做起司＋野菜版本。",
              caution: "非素食專門店，確認醬料／湯品是否含魚高湯；8 人建議 IG DM 預約。",
              instagram: "https://www.instagram.com/gakuya.galette/",
              query: "農家の台所 楽家 名護"
            }
          ]
        },
        {
          id: "day3-a-lunch",
          label: "A隊午餐",
          time: "10:00–14:30 行程含餐",
          location: "JUNGLIA 園內",
          fit: "A隊園內已含午餐",
          strategy: "A隊不另外安排外部餐廳。",
          options: [
            {
              rank: "主方案",
              name: "JUNGLIA 園內午餐",
              rating: "—",
              dietary: "Vegan／vegetarian",
              address: "JUNGLIA OKINAWA 園區內",
              hours: "依 12/20 官方行事曆與園內安排",
              highlights: ["行程已含午餐", "不需另行開車找餐廳"],
              detail: "A隊行程已含午餐，不需另外安排外部用餐。",
              caution: "向 JUNGLIA 確認 Vegan／vegetarian 餐點是否可供應。",
              query: "JUNGLIA OKINAWA"
            }
          ]
        },
        {
          id: "day3-dinner",
          label: "晚餐",
          time: "18:30",
          location: "美國村（北谷町美浜）",
          fit: "美國村內順路",
          strategy: "Bollywood Dreams ＞ Esparza's ＞ The Calif Kitchen；Bollywood Dreams 建議官網提前訂位。",
          options: [
            {
              rank: "①首選",
              name: "Bollywood Dreams",
              rating: "★4.4",
              dietary: "Vegan 菜色明確",
              address: "北谷町美浜9-1 デポアイランド A館 2F",
              phone: "098-926-0977",
              hours: "週日晚餐 17:00–21:30（L.O. 21:00，週四公休）",
              highlights: ["扁豆咖哩 dal", "vegan／gluten-free 菜色"],
              detail: "官網明示 vegan 菜色（扁豆咖哩 dal 等）；印度料理無魚高湯問題。",
              caution: "建議官網提前訂位（12 月旺季＋週日晚餐）；兒童椅電話確認。",
              website: "http://www.bollywood-dreams.jp/",
              query: "Bollywood Dreams 美浜 北谷町"
            },
            {
              rank: "②",
              name: "Esparza's Tacos & Coffee",
              rating: "★4.4",
              dietary: "約半數素食",
              address: "北谷町美浜3-1-10 1F",
              phone: "098-926-1888",
              hours: "週日 08:00–21:00（L.O. 20:30）",
              highlights: ["純素起司塔可", "豆腐 chorizo", "免費蔬菜湯＋salsa 自助吧"],
              detail: "約半數菜單為素食；附免費蔬菜湯＋salsa 自助吧；親子友善。",
              caution: "建議訂位；距 Depot Island 核心區步行稍遠。",
              instagram: "https://www.instagram.com/esparzastacosandcoffee/",
              query: "Esparza's Tacos & Coffee 北谷町"
            },
            {
              rank: "③",
              name: "The Calif Kitchen Okinawa",
              rating: "★4.5",
              dietary: "健康輕食",
              address: "北谷町美浜9-21 デポアイランド シーサイドビル 3F",
              phone: "098-926-1010",
              hours: "週日 08:00–22:00",
              highlights: ["海景第一排", "遊戲區、授乳室"],
              detail: "海景第一排；親子設施完善（遊戲區、授乳室）。健康輕食蛋奶素可應付。",
              caution: "無明確素食菜單，點餐時出示日文溝通句確認食材；建議訂位。",
              website: "http://thecalifkitchen.okinawa/",
              query: "The Calif Kitchen Okinawa"
            }
          ]
        }
      ]
    },
    day4: {
      meals: [
        {
          id: "day4-lunch",
          label: "午餐",
          time: "12:00",
          location: "AEON MALL Okinawa Rycom",
          fit: "Rycom 館內用餐",
          strategy: "Core Curry 為館內最務實選擇；願意開車 5 分鐘可改 GReen Mint。",
          options: [
            {
              rank: "①首選",
              name: "Core Curry（館內 3F）",
              rating: "同品牌他店 ★4.9／4.7（本店未公開）",
              dietary: "純素咖哩套餐",
              address: "北中城村ライカム1（AEON MALL Okinawa Rycom 3F 美食區）",
              hours: "每日 10:00–22:00 涵蓋午餐",
              highlights: ["純素咖哩飯套餐", "幼兒可吃不辣版本", "免訂位"],
              detail: "官方菜單有純素咖哩飯套餐；幼兒可吃不辣版本。",
              caution: "美食街自由入座，8 人無需訂位。",
              website: "https://www.core-dining.com/corecurry-aeonmall-okinawa-rycom/",
              query: "CORE CURRY イオンモール沖縄ライカム店"
            },
            {
              rank: "②輕食",
              name: "Lanai Cafe（館內，輕食備案）",
              rating: "未達門檻",
              dietary: "Vegan options",
              address: "AEON MALL Okinawa Rycom 館內",
              hours: "10:00–23:00 涵蓋午餐",
              highlights: ["館內唯一標示 Vegan options"],
              detail: "館內唯一標示「Vegan options」的店。",
              caution: "正餐選擇有限，僅作輕食備案。",
              query: "Lanai Cafe AEON MALL Okinawa Rycom"
            },
            {
              rank: "③館外",
              name: "GReen Mint（館外車程 5 分）",
              rating: "素食餐廳分類",
              dietary: "蔬食餐廳",
              address: "北中城村島袋1422-3（距 Rycom 約 900 公尺，車程約 5 分）",
              phone: "098-923-2426",
              hours: "週一 11:00–17:00 涵蓋午餐",
              highlights: ["真正的蔬食餐廳", "素食標示最明確"],
              detail: "真正的蔬食餐廳；Rycom 周邊素食標示最明確。",
              caution: "需開車或計程車（約 5 分）；8 人建議電話預約；出發前電話確認營業時間。",
              website: "https://greenmintr3.wixsite.com/website",
              query: "GReen Mint 北中城村島袋"
            }
          ]
        },
        {
          id: "day4-dinner",
          label: "晚餐",
          time: "18:40",
          location: "國際通（步行自 HOTEL ANTEROOM NAHA 前島前往）",
          fit: "國際通（步行可達）",
          strategy: "Tamatebako 為唯一「純素＋4.7 星＋週一晚間營業」；建議鎖定。",
          options: [
            {
              rank: "①首選",
              name: "Tamatebako（玉手箱）",
              rating: "★4.7",
              dietary: "純素餐廳",
              address: "那覇市牧志3-10-7",
              phone: "098-943-2567",
              hours: "週一 18:00–22:00（另有資料 17:00–23:00，無論如何皆涵蓋 18:40）",
              highlights: ["laksa", "花生豆腐", "海葡萄"],
              detail: "國際通周邊評分最高的純素餐廳；台灣五辛素安心。",
              caution: "店面小、一人經營，8 人務必提前預約；有幼兒可坐但空間較擠。",
              website: "https://www.tamatebako-okinawa.com/",
              query: "Tamatebako 那覇市牧志"
            },
            {
              rank: "②",
              name: "Borrachos",
              rating: "★4.3",
              dietary: "墨西哥；葷素共食",
              address: "那覇市牧志1-3-31 太平アパート 1F",
              phone: "098-943-4488",
              hours: "週一 17:00–翌 2:00 涵蓋晚餐",
              highlights: ["蔬菜塔可", "豆泥捲餅可客製", "26 席可接團體"],
              detail: "墨西哥料理素食選項多；26 席可接團體；22:00 前禁菸，幼兒同行無虞。",
              caution: "8 人建議預約。",
              website: "https://borrachos-okinawa.com/",
              query: "Borrachos 那覇市牧志"
            },
            {
              rank: "③需先確認",
              name: "くにんだ",
              rating: "★4.41",
              dietary: "琉球料理；素食需確認",
              address: "那覇市松尾1-2-7 真喜屋ビル 1F（國際通縣廳入口步行 1 分）",
              phone: "050-5592-8588",
              hours: "11:00–15:00／17:00–22:00（L.O. 21:00）",
              highlights: ["8 人包廂", "兒童菜單、嬰兒車可入店"],
              detail: "高評價新派琉球料理；有 8 人包廂，兒童最友善。",
              caution: "晚餐單一套餐制、¥8,000–9,999／人；素食對應需事先確認；務必預約。",
              website: "https://kuninda.jp/",
              query: "くにんだ 那覇市松尾"
            }
          ]
        }
      ]
    },
    day5: {
      meals: [
        {
          id: "day5-lunch",
          label: "午餐",
          time: "12:30",
          location: "iias 沖繩豐崎購物中心",
          fit: "還車後同一商場",
          strategy: "Crazy Spice ＞ Tacorice Cafe きじむなぁ ＞ Eggs'n Things；還車後不再移車。",
          options: [
            {
              rank: "①首選",
              name: "Crazy Spice（館內 1F 美食街）",
              rating: "★4.3",
              dietary: "印度咖哩",
              address: "豊見城市豊崎3-35，イーアス沖縄豊崎 1F 美食街",
              hours: "每日 10:00–21:00",
              highlights: ["豆類咖哩", "蔬菜咖哩", "8 人找位無壓力"],
              detail: "豆類咖哩、蔬菜咖哩、烤餅素食友善；美食街形式 8 人找位無壓力。",
              caution: "點餐時用日文溝通語確認咖哩不含肉、魚介、鰹だし。",
              website: "https://www.crazy-spice.com/",
              query: "Crazy Spice イーアス沖縄豊崎"
            },
            {
              rank: "②",
              name: "Tacorice Cafe きじむなぁ（館內 1F）",
              rating: "同品牌他店 4.4–4.7",
              dietary: "塔可飯（素食選項）",
              address: "豊見城市豊崎3-35，イーアス沖縄豊崎 1F",
              phone: "098-987-0858",
              hours: "每日 10:00–21:00",
              highlights: ["豆塔可飯", "歐姆蛋塔可飯（蛋素）"],
              detail: "菜單標註 vegetarian 選項（豆塔可飯）；歐姆蛋塔可飯為蛋素。",
              caution: "不需訂位；主動用日文溝通語確認是否含五辛與魚高湯。",
              website: "https://www.omutaco.com/",
              query: "タコライスカフェ きじむなぁ イーアス沖縄豊崎"
            },
            {
              rank: "③",
              name: "Eggs'n Things（館內）",
              rating: "同品牌他店 4.3–4.4",
              dietary: "蛋奶素早午餐",
              address: "豊見城市豊崎3-35（館內餐廳）",
              hours: "約 9:00–21:00（行前以官網確認）",
              highlights: ["水果鬆餅", "蛋料理全為蛋奶素", "親子友善"],
              detail: "水果鬆餅、蛋料理全為蛋奶素；親子友善。",
              caution: "避開鹹食含肉品項；8 人建議現場先詢問併桌。",
              website: "https://www.eggsnthingsjapan.com/",
              query: "Eggs'n Things イーアス沖縄豊崎"
            }
          ]
        },
        {
          id: "day5-dinner",
          label: "B組晚餐",
          time: "建議 16:00–16:30 於 iias 提前用餐",
          location: "iias → 那霸機場",
          fit: "B組提前用餐",
          strategy: "B 組在 iias 先吃完整晚餐再去機場。",
          options: [
            {
              rank: "①iias",
              name: "Crazy Spice iias 店（同午餐）",
              rating: "★4.3",
              dietary: "印度咖哩",
              address: "豊見城市豊崎3-35 イーアス沖縄豊崎 1F",
              hours: "營業至 21:00，16:00 完全涵蓋",
              highlights: ["吃完再去機場", "免移車"],
              detail: "營業至 21:00，16:00 完全涵蓋；吃完再去機場。",
              caution: "點餐時用日文溝通語確認咖哩不含肉、魚介、鰹だし。",
              website: "https://www.crazy-spice.com/",
              query: "Crazy Spice イーアス沖縄豊崎"
            },
            {
              rank: "②iias",
              name: "Tacorice Cafe きじむなぁ iias 店",
              rating: "同品牌他店 4.4–4.7",
              dietary: "塔可飯",
              address: "豊見城市豊崎3-35 イーアス沖縄豊崎 1F",
              hours: "營業至 21:00",
              highlights: ["換口味備案"],
              detail: "中午吃咖哩的話，傍晚改吃歐姆蛋塔可飯／豆塔可飯換口味。",
              website: "https://www.omutaco.com/",
              query: "タコライスカフェ きじむなぁ イーアス沖縄豊崎"
            },
            {
              rank: "③機場備案",
              name: "HELIOS Naha Airport Brewery",
              rating: "—",
              dietary: "Pizza；非素食專門",
              address: "鏡水150，那霸機場際內連結航廈 4F",
              hours: "11:00–20:00（最後點餐 19:00）",
              highlights: ["瑪格麗特／四種起司披薩（奶素）", "精釀啤酒"],
              detail: "瑪格麗特／四種起司披薩為明確奶素選項；精釀啤酒＋披薩適合非素食團員同樂。",
              caution: "予約不可，8 人直接前往，尖峰可能需等位；用日文溝通語確認披薩醬料不含肉類。",
              website: "https://helios-airport-brewery.com/",
              instagram: "https://www.instagram.com/helios_naha_airportbrewery/",
              query: "HELIOS 那覇空港 ブルワリー"
            }
          ]
        }
      ]
    }
  }
};
