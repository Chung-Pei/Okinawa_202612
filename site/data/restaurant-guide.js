window.RESTAURANT_GUIDE = {
  meta: {
    sourcePriority: "行程時段、營業時間與訂位狀態以 v7 PDF 為主；餐廳特色與連結由 MD v3.1 補充。",
    pdf: {
      file: "沖繩家族旅遊_領隊版_v7.pdf",
      pages: 16,
      sha256: "639AA148A50258B8A9CB98437FDE1AAA5BBD0BB3F1C39E5AA1B8CFDAB2E9A12D",
      checkedAt: "2026-09-07",
      restaurantPages: "5、7、9、11、15"
    },
    markdown: {
      file: "沖繩家族旅行_每日蔬食餐廳完整推薦指南_v3.1_地址官網GoogleMap版.md",
      sha256: "14C3CA674C006973870C14C47F42C562E9138F95D3C8D7D31E1FB4BFF34C33D3",
      checkedAt: "2026-09-04",
      role: "補充餐廳特色、地址、官方網站與 Google Maps 搜尋連結；不覆蓋 v7 PDF 的時段、營業與訂位狀態。"
    },
    dietaryRules: [
      {
        id: "no-meat-fish",
        title: "無肉、無魚、無柴魚高湯",
        hint: "台灣素食團體通用說法",
        japanese: ["私たちは台湾の素食です。", "肉、魚、魚介類、鰹だしを食べません。"]
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
          fit: "PDF v7 時段適配",
          strategy: "SEE THE SEA ＞ Taco Rice Cafe Kijimuna ＞ A Happy Pancake；A Happy Pancake 已預約時可改列首選。",
          options: [
            {
              rank: "首選",
              name: "SEE THE SEA",
              rating: "4.6",
              dietary: "Plant-Based／Vegan",
              address: "沖縄県豊見城市瀬長174-6 ウミカジテラス #41",
              hours: "11:00–21:00",
              highlights: ["Special Taco Rice", "Handmade Beni-Imo Tacos"],
              detail: "就在 Umikaji Terrace；官方明確標示 plant-based、gluten-free，植物性塔可飯較能支撐完整午餐。",
              caution: "假日可能候位；PDF v7 可直接承接 12:00 用餐。",
              website: "https://seetheseaokinawa.jp/",
              query: "SEE THE SEA select & resort Okinawa"
            },
            {
              rank: "第二選",
              name: "Taco Rice Cafe Kijimuna",
              rating: "4.3",
              dietary: "無肉客製",
              address: "沖縄県豊見城市瀬長174-6 ウミカジテラス",
              hours: "營業時間出發前再確認",
              highlights: ["Bean／vegetable taco rice", "可要求去除 cheese、mayo"],
              detail: "同在瀨長島，直接銜接行程；塔可飯是沖繩代表性料理。",
              caution: "點餐明確說明 Vegan／台灣素食，確認醬料與配料。",
              website: "https://www.omutaco.com/",
              query: "Taco Rice Cafe Kijimuna Senagajima Okinawa"
            },
            {
              rank: "第三選／預約型",
              name: "A Happy Pancake",
              rating: "4.2",
              dietary: "蛋奶素",
              address: "沖縄県豊見城市瀬長174-6 ウミカジテラス 32",
              hours: "需二週前預約；營業時間出發前再確認",
              highlights: ["水果舒芙蕾厚鬆餅", "原味厚鬆餅"],
              detail: "幼兒與長輩接受度高，但偏甜食型午餐；已預約時可優先，未預約則 SEE THE SEA 為主線。",
              caution: "PDF v7 明列需二週前預約，勿直接現場碰運氣。",
              website: "https://magia.tokyo/",
              query: "A Happy Pancake Umikaji Terrace Okinawa"
            }
          ]
        },
        {
          id: "day1-dinner",
          label: "晚餐",
          time: "19:30（需依營業時間提前）",
          location: "本部町／Hanasaki Marche 周邊",
          fit: "PDF v7 時段適配",
          strategy: "依 v7 晚餐時段已移除不適配的餐廳；保留可作晚餐候選的海邦丸與食事処 千，兩者都需先確認素食條件。",
          options: [
            {
              rank: "近距離候選",
              name: "海人料理 海邦丸",
              rating: "4.2",
              dietary: "海鮮餐廳；需確認",
              address: "Hanasaki Marche 內／本部町山川",
              hours: "營業時間出發前再確認",
              highlights: ["距阿拉馬海納最近", "長途開車後不必折返"],
              detail: "位於 Hanasaki Marche 內，適合抵達住宿後就近用餐。",
              caution: "預約時要求「肉・魚介・鰹だしなし」，確認廚房能否獨立製作。",
              query: "海人料理 海邦丸 本部町"
            },
            {
              rank: "第二候選",
              name: "食事処 千",
              rating: "4.7",
              dietary: "家庭式；需電話確認",
              address: "沖縄県国頭郡本部町山川1447",
              hours: "營業時間與素食菜單待電話確認",
              highlights: ["高評分", "本部町山川地區"],
              detail: "距住宿區近，可作高評分備援。",
              caution: "公開資料不足以確認固定 Vegan 菜單，不列為無條件素食推薦。",
              query: "食事処 千 本部町 Okinawa"
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
          fit: "PDF v7：13:00 離館後承接",
          strategy: "L LOTA 適合完整午餐；なんくるKITCHEN 適合輕食；Shirasa 作一般餐食備援。",
          options: [
            {
              rank: "首選",
              name: "Restaurant L LOTA",
              rating: "4.7",
              dietary: "Vegetarian friendly",
              address: "沖縄県国頭郡今帰仁村古宇利466-1",
              hours: "12:00–16:00",
              highlights: ["蔬菜義大利麵", "沙拉／蔬菜型午餐組合", "古宇利島高地景觀"],
              detail: "停車方便，可承接 14:00 午餐，是本日最完整的午餐方向。",
              caution: "PDF v7 明列需確認能否接受 8 人以上大團體於 14:00 用餐；不列為純素店。",
              website: "https://www.llota.okinawa.jp/",
              query: "Restaurant L LOTA Okinawa"
            },
            {
              rank: "輕食",
              name: "なんくるKITCHEN",
              rating: "4.9",
              dietary: "植物性輕食",
              address: "沖縄県国頭郡今帰仁村古宇利424 KITCHEN STAY KAPUKA",
              hours: "營業時間出發前再確認",
              highlights: ["Acai Bowl", "Fruit Bowl", "Coconut Bowl"],
              detail: "距 Ocean Tower 約 1 分鐘車程，適合水族館後接古宇利島的動線。",
              caution: "8 人若要吃飽需搭配其他主食；較適合輕食或下午餐。",
              website: "https://www.instagram.com/kouri_nankuru/",
              websiteLabel: "官方 IG",
              query: "なんくるKITCHEN 古宇利島 Okinawa"
            },
            {
              rank: "備援",
              name: "Shirasa 食堂",
              rating: "4.2",
              dietary: "定食；需確認",
              address: "沖縄県国頭郡今帰仁村古宇利176",
              hours: "10:00–17:00",
              highlights: ["一般定食", "可承接 14:00 時段"],
              detail: "位於古宇利島，可作一般餐食備援。",
              caution: "目前未取得足夠證據確認固定 Vegan／五辛素菜單；點餐前確認高湯。",
              query: "Shirasa 食堂 古宇利島 Okinawa"
            }
          ]
        },
        {
          id: "day2-dinner",
          label: "晚餐",
          time: "18:00",
          location: "本部町（已訂：OKINAWA SHABU-SHABU）",
          fit: "PDF v7：已訂主方案",
          strategy: "已訂 OKINAWA SHABU-SHABU 為主；TO-PU 為蔬食家庭餐備援，海邦丸不列入 v7 當日晚餐表。",
          options: [
            {
              rank: "原訂",
              name: "OKINAWA SHABU-SHABU 本部店",
              rating: "—",
              dietary: "葷素共桌可行",
              address: "沖縄県国頭郡本部町（詳細地址出發前再確認）",
              hours: "已訂 18:00；營業資訊出發前再確認",
              highlights: ["鄰近住宿", "適合團體共桌"],
              detail: "PDF v7 標示已訂位，18:00 直接承接行程。",
              caution: "預約時指定昆布／蔬菜鍋底，要求獨立鍋具，不使用魚介高湯。",
              query: "OKINAWA SHABU-SHABU 本部店"
            },
            {
              rank: "備援",
              name: "沖縄そばと島どうふ TO-PU",
              rating: "4.6",
              dietary: "Vegetarian menu",
              address: "沖縄県国頭郡本部町浜元233",
              hours: "營業時間出發前再確認",
              highlights: ["島豆腐", "沖繩地方料理方向", "兒童／嬰兒車友善"],
              detail: "比單純找義大利麵更有沖繩地方特色，島豆腐適合本團素食者。",
              caution: "沖繩そば湯頭通常涉及魚介，務必要求無鰹だし。",
              query: "沖縄そばと島どうふ TO-PU"
            }
          ]
        }
      ]
    },
    day3: {
      meals: [
        {
          id: "day3-a-lunch",
          label: "A 組午餐",
          time: "12:30",
          location: "名護市區",
          fit: "PDF v7：A 組午餐",
          strategy: "くまキッチン ＞ ナカラマサラ ＞ 農家の台所 楽家；B 組不另外安排外部午餐。",
          options: [
            {
              rank: "首選",
              name: "くまキッチン",
              rating: "4.9",
              dietary: "Vegetarian restaurant",
              address: "沖縄県名護市城1-4-11 名護市営市場1F",
              hours: "10:00–15:00",
              highlights: ["素食定食", "蔬食主餐", "名護市區動線"],
              detail: "Google Maps 4.9★，直接符合本團飲食需求；12:30 時段最合適。",
              caution: "8 人座位請提前確認。",
              website: "https://kuma-kitchen.netlify.app/",
              query: "くまキッチン 名護 Okinawa"
            },
            {
              rank: "第二選",
              name: "ナカラマサラ",
              rating: "4.4",
              dietary: "印度咖哩／Vegan friendly",
              address: "沖縄県名護市大南2-4-12 1F",
              hours: "營業時間出發前再確認",
              highlights: ["豆類咖哩", "蔬菜咖哩", "雙咖哩套餐方向"],
              detail: "可讓素食者吃到有蛋白質的完整午餐，而非只有沙拉。",
              caution: "店面較小，建議提前聯絡確認座位。",
              website: "https://www.instagram.com/nakara_masala/",
              websiteLabel: "官方 IG",
              query: "ナカラマサラ 名護 Okinawa"
            },
            {
              rank: "備援",
              name: "農家の台所 楽家",
              rating: "4.6",
              dietary: "在地食材；需確認",
              address: "沖縄県名護市屋部30-3",
              hours: "營業時間出發前再確認",
              highlights: ["農家／在地食材", "名護地區備援"],
              detail: "Google Maps 4.6★，作為在地食材方向的備案。",
              caution: "需事前指定 vegetarian 並確認高湯與 Vegan 菜單。",
              query: "農家の台所 楽家 名護 Okinawa"
            }
          ]
        },
        {
          id: "day3-b-lunch",
          label: "B 組午餐",
          time: "10:00–14:30 行程含餐",
          location: "JUNGLIA 園內",
          fit: "PDF v7：園內已含午餐",
          strategy: "B 組不另外安排外部餐廳；出發前直接向 JUNGLIA 確認 Vegan／vegetarian 餐點。",
          options: [
            {
              rank: "主方案",
              name: "JUNGLIA 園內午餐",
              rating: "—",
              dietary: "Vegan／vegetarian 待確認",
              address: "JUNGLIA OKINAWA 園區內",
              hours: "依 12/20 官方行事曆與園內安排",
              highlights: ["行程已含午餐", "不需另行開車找餐廳"],
              detail: "PDF v7 明確寫明 JUNGLIA 含午餐，B 組不需另外安排外部用餐。",
              caution: "票券、營業時間與餐點供應須於 T-7～T-1 向官方再次確認。",
              query: "JUNGLIA OKINAWA"
            }
          ]
        },
        {
          id: "day3-dinner",
          label: "晚餐",
          time: "18:30",
          location: "美國村",
          fit: "PDF v7：美國村內順路",
          strategy: "Bollywood Dreams ＞ Esparza's ＞ The Calif Kitchen；Bollywood Dreams 建議 8 人提前訂位。",
          options: [
            {
              rank: "首選",
              name: "Bollywood Dreams",
              rating: "4.5",
              dietary: "Vegetarian friendly／Vegan options",
              address: "沖縄県中頭郡北谷町美浜9-1 Depot Island A 2F",
              hours: "營業時間出發前再確認",
              highlights: ["Vegan curry", "菠菜／南瓜咖哩", "Dal／Naan", "兒童椅"],
              detail: "蔬食選擇比一般沖繩料理店可靠，且位於美國村內，逛街後直接用餐。",
              caution: "8 人建議提前訂位。",
              website: "https://www.bollywood-dreams.jp/",
              query: "Bollywood Dreams Chatan Okinawa"
            },
            {
              rank: "第二選",
              name: "Esparza's",
              rating: "4.4",
              dietary: "Vegan options／Vegetarian options",
              address: "沖縄県中頭郡北谷町美浜3-1-10 1F",
              hours: "營業時間出發前再確認",
              highlights: ["Jackfruit taco", "豆類 taco", "豆腐／植物肉 taco"],
              detail: "就在美國村內，距點燈區近，無需重新開車。",
              caution: "點餐時再次確認起司、酸奶與醬料是否含動物性成分。",
              query: "ESPARZA'S TACOS & COFFEE Okinawa"
            },
            {
              rank: "第三選",
              name: "The Calif Kitchen Okinawa",
              rating: "4.5",
              dietary: "親子友善；素食確定性較低",
              address: "沖縄県中頭郡北谷町美浜9-21 デポアイランドシーサイドビル3F",
              hours: "營業時間出發前再確認",
              highlights: ["Depot Island 海岸區", "夕陽／點燈動線順路"],
              detail: "景觀與親子便利性高，適合作為葷素共食備案。",
              caution: "需現場確認 Vegan／vegetarian 可用品項。",
              website: "https://thecalifkitchen.okinawa/",
              query: "THE CALIF KITCHEN Okinawa"
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
          fit: "PDF v7：不硬湊 Google ≥4.2★",
          strategy: "最實際是 Rycom 餐廳區逐店挑選；Gokoku、Jai Thai 僅作不移車優先時的評分門檻例外。",
          options: [
            {
              rank: "實際方案",
              name: "Rycom 餐廳區逐店挑選",
              rating: "場所",
              dietary: "逐店確認 vegetarian／vegan",
              address: "沖縄県中頭郡北中城村字ライカム1",
              hours: "專門店約 10:00–22:00；各店依現場",
              highlights: ["不移車", "Food Court／餐廳區可分流", "12:00 直接用餐"],
              detail: "本日兒童王國後直接到 Rycom；挑選有明確 vegetarian／vegan 標示的櫃位。",
              caution: "商場評分不等同單店評分；每家仍須確認高湯與配料。",
              website: "https://okinawarycom-aeonmall.com/",
              query: "AEON MALL Okinawa Rycom"
            },
            {
              rank: "例外",
              name: "Gokoku",
              rating: "3.7*",
              dietary: "和風蔬菜／豆腐方向",
              address: "AEON MALL Okinawa Rycom 內",
              hours: "營業時間出發前再確認",
              highlights: ["不需移車", "和風料理方向"],
              detail: "可作 Rycom 內的實務備案。",
              caution: "*不達 Google 4.2★門檻；只有在不移動車輛為最高優先時考慮。",
              query: "Gokoku AEON MALL Okinawa Rycom"
            },
            {
              rank: "例外",
              name: "Jai Thai",
              rating: "3.8*",
              dietary: "泰式；有蔬菜選項",
              address: "AEON MALL Okinawa Rycom 內",
              hours: "營業時間出發前再確認",
              highlights: ["蔬菜／豆腐方向較好客製", "不需移車"],
              detail: "前兩方案無法用餐時才考慮。",
              caution: "*不達 Google 4.2★門檻；仍需確認高湯與魚露。",
              query: "Jai Thai AEON MALL Okinawa Rycom"
            }
          ]
        },
        {
          id: "day4-dinner",
          label: "晚餐",
          time: "18:40",
          location: "國際通（建議候選：波照間）",
          fit: "PDF v7：時段適配；尚未訂位",
          strategy: "波照間為第一候選，採用時需自行訂位；Tamatebako、Borrachos 為同時段備援；不適配當日時段的餐廳已移除。",
          options: [
            {
              rank: "第一候選／需訂位",
              name: "波照間（沖縄地料理／國際通店）",
              rating: "—",
              dietary: "沖繩地方料理；需確認素食",
              address: "〒900-0013 沖縄県那覇市牧志1-2-30",
              hours: "11:00–23:00（官方頁；出發前再確認）",
              highlights: ["沖繩地方料理", "國際通步行可達", "18:30 左右有島唄／三線表演"],
              detail: "位於國際通，符合 Day 4 晚間步行動線；v7 PDF 將它列為 18:40 晚餐建議。",
              caution: "目前尚未訂位；採用時請先確認 8 人座位、素食菜色、鰹だし與五辛需求。",
              website: "https://hateruma.jcc-okinawa.net/",
              query: "沖縄地料理 波照間 国際通り店 那覇市牧志1-2-30",
              mapUrl: "https://maps.app.goo.gl/1e6UQL7usckTacay6"
            },
            {
              rank: "備援",
              name: "Tamatebako",
              rating: "4.7",
              dietary: "純素餐廳",
              address: "沖縄県那覇市牧志3-10-7",
              hours: "星期一正常營業；時間出發前再確認",
              highlights: ["純素亞洲料理", "可直接取代已歇業／公休候選"],
              detail: "若波照間無法訂位或飲食條件出現問題，Tamatebako 是本日最穩定的蔬食備援。",
              caution: "8 人建議提前訂位。",
              website: "https://www.tamatebako-okinawa.com/",
              query: "Tamatebako Naha Okinawa"
            },
            {
              rank: "備援",
              name: "Borrachos",
              rating: "4.3",
              dietary: "墨西哥；葷素共食",
              address: "沖縄県那覇市牧志1-3-31 太平アパート1F",
              hours: "星期一營業；時間出發前再確認",
              highlights: ["豆類／酪梨／蔬菜組合", "國際通區域便利"],
              detail: "便利性高，適合葷素共食備案。",
              caution: "若要求 Vegan，另確認起司、酸奶與蛋。",
              website: "https://borrachos-okinawa.com/",
              query: "Borrachos Okinawa Naha"
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
          location: "iias 沖繩豐崎",
          fit: "PDF v7：還車後同一商場用餐",
          strategy: "Crazy Spice iias ＞ iias Food Street 分流 ＞ Kijimuna；還車後不再移車。",
          options: [
            {
              rank: "首選",
              name: "Crazy Spice iias 店",
              rating: "4.3",
              dietary: "印度咖哩",
              address: "iias 沖繩豐崎內（豐見城市豐崎3-35）",
              hours: "iias 店舖約 10:00–21:00；單店出發前再確認",
              highlights: ["蔬菜咖哩", "多人快速用餐", "不需再移車"],
              detail: "Google 資料約 4.3★，位於 iias 內，完全符合 12:30 集合與快速用餐需求。",
              caution: "選蔬菜咖哩並確認湯底與乳製品；若要求 Vegan 必須逐項確認。",
              query: "Crazy Spice iias Okinawa Toyosaki"
            },
            {
              rank: "團體備案",
              name: "iias Food Street",
              rating: "4.2*",
              dietary: "多店可選",
              address: "沖縄県豊見城市豊崎3-35 iias 內",
              hours: "Food Street／各店依商場現場",
              highlights: ["可分流", "同一商場快速集合"],
              detail: "適合不同家庭成員分流選餐，再回到 12:30 集合。",
              caution: "*4.2★是 Food Street／場所評分，不等同每家店；選店仍要個別確認素食標示。",
              website: "https://toyosaki.iias.jp/",
              query: "iias 沖縄豊崎 Food Street"
            },
            {
              rank: "第三選",
              name: "Tacorice Cafe Kijimuna",
              rating: "—",
              dietary: "無肉客製",
              address: "iias／豐崎地區（店址出發前再確認）",
              hours: "營業時間與 Vegan 資訊出發前再確認",
              highlights: ["快速出餐", "塔可飯容易做無肉版本"],
              detail: "適合本日快速集合，但不把舊版評分與 Vegan 敘述視為永久有效。",
              caution: "出發前再次確認店家位置、評分與素食配料。",
              website: "https://www.omutaco.com/",
              query: "Taco Rice Cafe Kijimuna iias Okinawa"
            }
          ]
        },
        {
          id: "day5-dinner",
          label: "B 組晚餐",
          time: "建議 16:00–16:30 於 iias 提前用餐",
          location: "iias → 那霸機場",
          fit: "PDF v7：提前吃比機場硬湊評分穩定",
          strategy: "最佳策略是 B 組在 iias 先吃完整晚餐，再前往機場；機場內僅作備案，不硬湊 Google ≥4.2★三家。",
          options: [
            {
              rank: "評分達標備案",
              name: "HELIOS Naha Airport Brewery",
              rating: "4.3",
              dietary: "Pizza；非素食專門",
              address: "那霸機場內",
              hours: "營業時間出發前再確認",
              highlights: ["可詢問無肉起司披薩", "機場內評分達標"],
              detail: "若未能在 iias 完成晚餐，可作機場內一般餐廳備案。",
              caution: "非素食餐廳；若團體要求嚴格 Vegan，不是首選。",
              query: "HELIOS Naha Airport Brewery"
            },
            {
              rank: "甜點補充",
              name: "oHacorté Naha Airport",
              rating: "4.2",
              dietary: "水果塔／甜點",
              address: "那霸機場內",
              hours: "營業時間出發前再確認",
              highlights: ["適合 Vegan 甜點", "可作餐後補充"],
              detail: "適合水果塔或甜點補充，不建議把它視為完整晚餐。",
              caution: "甜點店，不是完整晚餐方案。",
              query: "oHacorté Naha Airport"
            },
            {
              rank: "素食優先例外",
              name: "Donburi Nantoya",
              rating: "3.8*",
              dietary: "有 Vegan 方向",
              address: "那霸機場內",
              hours: "營業時間出發前再確認",
              highlights: ["較有素食方向", "可作最後備案"],
              detail: "只有在團體把素食安全性放在 Google 4.2★之前時考慮。",
              caution: "*低於 4.2★門檻；需現場再次確認配料與高湯。",
              query: "Donburi Nantoya Naha Airport"
            }
          ]
        }
      ]
    }
  }
};
