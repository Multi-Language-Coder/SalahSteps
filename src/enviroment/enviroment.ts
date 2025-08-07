const invalidatingActions = [
    "Talking purposefully or forgetfully",
    "Saying salām to someone verbally, shaking hands, or responding to someone's salām",
    "Making du‘ā' with words that are used in normal conversation",
    "An ‘amal kathīr (excessive movement). This term denotes any such major action that gives an idea to the onlooker that the person who made that action is not in the state of ṣalāh.",
    "Three minor movements (‘amal qalīl), performed in one stage of ṣalāh equal one ‘amal kathīr and will thus invalidate the ṣalāh.",
    "Turning the chest 45 degrees or more away from the direction of the qiblah.",
    "Eating or drinking anything that was not already inside of the mouth, regardless of size, at the time of starting the ṣalāh.",
    "Ingesting something that was already in between the teeth if it equals or exceeds the size of a chickpea.",
    "To groan, moan or sigh.",
    "Crying out loud due to any physical or emotional hardship. However, crying out of the remembrance of paradise or hellfire does not invalidate the ṣalāh.",
    "Laughing in such a way that one could hear their own laughter. Laughing in a manner that could be heard by surrounding people would even invalidate the wuḍū'.",
    "Purposefully leaving out a wājib act."
];
const stepsOfSalah: SalahStep[] = [
    {
        step: 1,
        action: "Be purified, Be on time, Facing the Qiblah, Cover the body, Have the intention to pray, Takbir Tahrimah"
    },
    {
        step: 2,
        action: 'While standing, say "Allahu Akbar" while raising hands up to the ears touching the earlobes with the thumbs. After so, both hands will go under the navel with the right hand goes over the left'
    },
    {
        step: 3,
        action: 'Recite the Thana in a voice only you can hear',
        recitation: ["Subhanaka Allahumma wa bi hamdika wa tabarakasmuka wa ta'ala jadduka wa la ilaha ghaiyruk"],
        audioFile: ["assets/audio/Thana.mp3"]
    },
    {
        step: 4,
        action: "Recite the Ta'awwudh and the Tasmiyah",
        recitation: ["A'udhu billahi min-ash-shaytanir-rajim", "Bismillahir-rahmanir-raheem"],
        audioFile: ["assets/audio/Taawwudh.mp3", "assets/audio/Tasmiyah.mp3"]
    },
    {
        step: 5,
        action: "Recite Surah Al-Fatiha",
        recitation: ["Alhamdu lillahi rabbil alamin", "Ar-rahmanir-rahim", "Maliki yawmid-din", "Iyaka na'budu wa iyaka nasta'in", "Ihdinas-siratal-mustaqim", "Siratal ladhina an'amta alayhim", "Ghayril Maghdubi alayhim walad-dAllin"],
        audioFile: ["assets/audio/SurahFatihah.mp3"]
    },
    {
        step: 6,
        action: "Recite another Surah or verses from the Quran (Surah Ikhlas is recommended)",
        recitation: ["Qul huwal laahu ahad",
            "Allah hus-samad",
            "Lam yalid wa lam yoolad",
            "Wa lam yakul-lahoo kufuwan ahad"],
        audioFile: ["assets/audio/SurahIkhlas.mp3"]
    },
    {
        step: 7,
        action: "Say what is below first while going into Ruku. In Ruku, one will grasp the knees with their hands, such that the palms are placed on the knees with the finger well spread out.",
        recitation: ["Allahu Akbar", "Subhana Rabbiy-al Azim"],
        audioFile: ["assets/audio/Allahu-Akbar.mp3", "assets/audio/Step7.mp3"]
    },
    {
        step: 8,
        action: "Rising back up to a standing position saying what's below first, and during standing position say the one below the first one",
        recitation: ["Sami Allahu liman Hamidah", "Rabbana wa lakal hamd"],
        audioFile: ["assets/audio/Ruku-Up.mp3", "assets/audio/Ruku-Mid.mp3"]
    },
    {
        step: 9,
        action: "Say 'Allahu Akbar' while going into Sajdah. One will place their knee on the ground first, followed by the hands, and then the head in between the hands. One will also firmly plant the forehead and the bone of the nose to the ground. and press the toes firmly facing the Qiblah. And palms are flat on the ground.",
        recitation: ["Subhana Rabbiy-al A'la"],
        audioFile: ["assets/audio/Sajdah-Recitation.mp3"]
    },
    {
        step: 9.5,
        action: "Then one will rise from sajdah and sit in an upright position for a moment keeping the hands on the thighs. Now, one will go back into sajdah reciting the same thing that was recited for the first sajdah. Every unit in salah is composed of two sajdahs."
    },
    {
        step: 10,
        action: "One will stand up straight directly getting up from the Sajdah and tie hands in the same manner as before. Now, repeat step 5"
    },
    {
        step: 11,
        action: "Recite a Surah or verses from the Quran that is different from the one recited in the previous unit"
    },
    {
        step: 12,
        action: "Repeat Steps 7 to 9.5 just as they were done in the first unit"
    },
    {
        step: 13,
        action: "After getting up from sajdah, sit down with your hands on your thighs and recite Tashahhud and after will Recite the Shahadah keeping the right index finger raised when reciting the underlined portion",
        recitation: ["Attahiyatu lillahi was-salawatu wat-tayyibat as-salamu 'alayka ayyuhan-nabiyu wa rahmatullahi wa barakatuhu as-salamu 'alayna wa 'ala ibadil-lahis-salihin"],
        audioFile: ["assets/audio/Tashahhud.mp3"]
    },
    {
        step: 14,
        action: "1A: If it is the last unit of the Set. One will recite Salah Ibrahimi and recite any dua after it. And can then one will turn their head to right and say what is after Salah Ibrahimi and repeat to the left",
        recitation: ["Allahuma salli 'ala Muhammadiw-wa 'ala 'ali Muhammadin kama sallayta 'ala Ibrahima wa 'ala ali Ibrahima innaka hamidum-majid. Allahuma barik 'ala Ibrahima wa 'ala ali Ibrahima innaka hamidum-majid", "As-salamu 'alaykum wa rahmatullah"],
        audioFile: ["assets/audio/SalahIbrahimi.mp3", "assets/audio/greeting.mp3"]
    },
    {
        step: 14.5,
        action: "1B: One will stand back up immediately after reciting the Tashahhud and repeat steps 5 to 9. And if Fard prayer, skip to 6"
    },
    {
        step: 15,
        action: "Repeat steps 11, then steps 7 through 9"
    },
    {
        step: 16,
        action: "If it is the last unit of the Set, one will sit down and repeat step 13 and 14 to complete the Salah"
    },
    {
        step: 16.5,
        action: "One will stand back up after being in Sajdah and repeat steps 5 to 9 again. And if Fard, skip step 6"
    },
    {
        step: 17,
        action: "One will repeat step 13 and perform step 14 to complete Salah"
    }
]
export const enviroment = {
    salahSteps: stepsOfSalah,
    Salah_Witr: [
        {
            step: 1,
            action: "Be purified, Be on time, Facing the Qiblah, Cover the body, Have the intention to pray, Takbir Tahrimah"
        },
        {
            step: 2,
            action: 'While standing, say "Allahu Akbar" while raising hands up to the ears touching the earlobes with the thumbs. After so, both hands will go under the navel with the right hand goes over the left'
        },
        {
            step: 3,
            action: 'Recite the Thana in a voice only you can hear',
            recitation: ["Subhanaka Allahumma wa bi hamdika wa tabarakasmuka wa ta'ala jadduka wa la ilaha ghaiyruk"],
            audioFile: ["assets/audio/Thana.mp3"]
        },
        {
            step: 4,
            action: "Recite the Ta'awwudh and the Tasmiyah",
            recitation: ["A'udhu billahi min-ash-shaytanir-rajim", "Bismillahir-rahmanir-raheem"],
            audioFile: ["assets/audio/Taawwudh.mp3", "assets/audio/Tasmiyah.mp3"]
        },
        {
            step: 5,
            action: "Recite Surah Al-Fatiha",
            recitation: ["Alhamdu lillahi rabbil alamin", "Ar-rahmanir-rahim", "Maliki yawmid-din", "Iyaka na'budu wa iyaka nasta'in", "Ihdinas-siratal-mustaqim", "Siratal ladhina an'amta alayhim", "Ghayril Maghdubi alayhim walad-dAllin"],
            audioFile: ["assets/audio/SurahFatihah.mp3"]
        },
        {
            step: 6,
            action: "Recite another Surah or verses from the Quran (Surah Ikhlas is recommended)",
            recitation: ["Qul huwal laahu ahad",
                "Allah hus-samad",
                "Lam yalid wa lam yoolad",
                "Wa lam yakul-lahoo kufuwan ahad"],
            audioFile: ["assets/audio/SurahIkhlas.mp3"]
        },
        {
            step: 7,
            action: "Say what is below first while going into Ruku. In Ruku, one will grasp the knees with their hands, such that the palms are placed on the knees with the finger well spread out.",
            recitation: ["Allahu Akbar", "Subhana Rabbiy-al Azim"],
            audioFile: ["assets/audio/Allahu-Akbar.mp3", "assets/audio/Step7.mp3"]
        },
        {
            step: 8,
            action: "Rising back up to a standing position saying what's below first, and during standing position say the one below the first one",
            recitation: ["Sami Allahu liman Hamidah", "Rabbana wa lakal hamd"],
            audioFile: ["assets/audio/Ruku-Up.mp3", "assets/audio/Ruku-Mid.mp3"]
        },
        {
            step: 9,
            action: "Say 'Allahu Akbar' while going into Sajdah. One will place their knee on the ground first, followed by the hands, and then the head in between the hands. One will also firmly plant the forehead and the bone of the nose to the ground. and press the toes firmly facing the Qiblah. And palms are flat on the ground.",
            recitation: ["Subhana Rabbiy-al A'la"],
            audioFile: ["assets/audio/Sajdah-Recitation.mp3"]
        },
        {
            step: 9.5,
            action: "Then one will rise from sajdah and sit in an upright position for a moment keeping the hands on the thighs. Now, one will go back into sajdah reciting the same thing that was recited for the first sajdah. Every unit in salah is composed of two sajdahs."
        },
        {
            step: 10,
            action: "One will stand up straight directly getting up from the Sajdah and tie hands in the same manner as before. Now, repeat step 5"
        },
        {
            step: 11,
            action: "Recite a Surah or verses from the Quran that is different from the one recited in the previous unit"
        },
        {
            step: 12,
            action: "Repeat Steps 7 to 9.5 just as they were done in the first unit"
        },
        {
            step: 13,
            action: "After getting up from sajdah, sit down with your hands on your thighs and recite Tashahhud and after will Recite the Shahadah keeping the right index finger raised when reciting the underlined portion",
            recitation: ["Attahiyatu lillahi was-salawatu wat-tayyibat as-salamu 'alayka ayyuhan-nabiyu wa rahmatullahi wa barakatuhu as-salamu 'alayna wa 'ala ibadil-lahis-salihin"],
            audioFile: ["assets/audio/Tashahhud.mp3"]
        },
        {
            step: 14,
            action: "One will stand back up immediately after reciting the Tashahhud and after reciting Surah Al-Fatihah, recite another Surah (Example Surah below)",
            recitation: ["Qul a'oozu birabbin naas",
                "Malikin naas",
                "Ilaahin naas",
                "Min sharril waswaasil khannaas",
                "Allazee yuwaswisu fee sudoorin naas",
                "Minal jinnati wannaas"],
            audioFile: ["assets/audio/SurahAnNas.mp3"]
        },
        {
            step: 15,
            action: "One will recite Takbir and fold their hands as they were before",
            recitation: ["Allahu Akbar"],
            audioFile: ["assets/audio/Allahu-Akbar.mp3"]
        },
        {
            step: 16,
            action: "Recite the Dua of Qunut",
            recitation: [
                "Allahuma inna nasta inuka wa nastaghfiruka wa nu'minu bika wa natawakkalu 'alayka wa nuthni 'alayk-al khayr, wa nashkuruka wa la nakfuruka wa nakhla 'u wa natruku mayni-yafiuruk, 'allahumma 'iyyaka na'budu wa laka nusalli wa nasjudu wa 'ilayka nas 'a wa nahfidu wa narju rahmataka wa nakhsha 'adhabaka 'inna 'adhabaka bil-kuffari mulhiq"
            ]
        },
        {
            step: 17,
            action: "After getting up from sajdah, sit down with your hands on your thighs and recite Tashahhud and after will Recite the Shahadah keeping the right index finger raised when reciting the underlined portion",
            recitation: ["Attahiyatu lillahi was-salawatu wat-tayyibat as-salamu 'alayka ayyuhan-nabiyu wa rahmatullahi wa barakatuhu as-salamu 'alayna wa 'ala ibadil-lahis-salihin"],
            audioFile: ["assets/audio/Tashahhud.mp3"]
        },
        {
            step: 18,
            action: "1A: If it is the last unit of the Set. One will recite Salah Ibrahimi and recite any dua after it. And can then one will turn their head to right and say what is after Salah Ibrahimi and repeat to the left",
            recitation: ["Allahuma salli 'ala Muhammadiw-wa 'ala 'ali Muhammadin kama sallayta 'ala Ibrahima wa 'ala ali Ibrahima innaka hamidum-majid. Allahuma barik 'ala Ibrahima wa 'ala ali Ibrahima innaka hamidum-majid", "As-salamu 'alaykum wa rahmatullah"],
            audioFile: ["assets/audio/SalahIbrahimi.mp3", "assets/audio/greeting.mp3"]
        },
    ],
    stepsUpUntil: {
        UnitTwo: 14,
        UnitThree: 16,
        UnitFour: 17
    },
    invalidation: invalidatingActions,
    baseApiUrl: "https://api.aladhan.com/v1/",
    apiKey: '677875d2dcd56002469145oand89e51',
    womenProcedure: [
        "Hands should not go above the shoulders during takbir tahrima.",
        "In qiyam, the hands should be tied below the breasts with the right palm resting on the back of the left hand's palm in a lax position without wrapping the wrist.",
        "Bow slightly in rukūʿ, only enough for the hands to reach the knees. She should not straighten her back, and she should not grasp the knees. Rather, she should simply keep the hands on the knees.",
        "In sajdah, she should gather herself and not spread out the body. She should join her arms to her sides, her stomach should be close to her thighs, her thighs close to her calves, and her shins should be close to the ground. The arms and feet must be in contact with the ground.",
        "Sit with both legs to the right side and the right foot should be laid out on the ground.",
    ],
    SalahAlJanazah: {
        Thana:"Subḥānak-allāhumma wa bi ḥamdika wa tabārakasmuka wa ta'ālā jadduka wa jalla thanA'uka wa lā ilāha ghayruk.",
        AdultVer:"Allaahummaghfir li-hayyinna wa mayyitina wa shahidina wa ghaa'ibinaa wa saghirinaa wa kabirinaa wa dhakarinaa wa unthaana. Allaahumma man ahyaytahu minna fa ahyihi 'alal-Islaam, wa man tawaffaytahu minnaa fa tawaffahu 'alal-imaan.",
        BoyChild:"Allaahummaj'alhu lanaa farataw-waj'alhu lanaa ajraw-wa dhukhraaw-waj'alhu lanaa shaafi'aw-wa mushaffa'aa",
        GirlChild:"Allaahummaj'alhaa lanaa farataw-waj'alhaa lanaa ajraw-wa dhukhraaw-waj'alhaa lanaa shaafi'ataw-wa mushaffa'ah",
    }
}
export interface SalahStep {
    step: number;
    action: string;
    recitation?: string[];
    audioFile?: string[];
}