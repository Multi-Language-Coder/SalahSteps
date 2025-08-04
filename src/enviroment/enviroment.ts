const stepsOfSalah: SalahStep[] = [
        {
            step:1,
            action:"Be purified, Be on time, Facing the Qiblah, Cover the body, Have the intention to pray, Takbir Tahrimah"
        },
        {
            step:2,
            action:'While standing, say "Allahu Akbar" while raising hands up to the ears touching the earlobes with the thumbs. After so, both hands will go under the navel with the right hand goes over the left'
        },
        {
            step:3,
            action:'Recite the Thana in a voice only you can hear',
            recitation:["Subhanaka Allahumma wa bi hamdika wa tabarakasmuka wa ta’ala jadduka wa la ilaha ghaiyruk"]
        },
        {
            step:4,
            action:"Recite the Ta'awwudh and the Tasmiyah",
            recitation:["a'udhu billahi min-ash-shaytanir-rajim","bismillahir-rahmanir-raheem"]
        },
        {
            step:5,
            action:"Recite Surah Al-Fatiha",
            recitation:["Alhamdu lillahi rabbil alamin","Ar-rahmanir-rahim","Maliki yawmid-din","Iyaka na'budu wa iyaka nasta'in","Ihdinas-siratal-mustaqim","Siratal ladhina an'amta alayhim","Ghayril Maghdubi alayhim walad-dAllin"]
        },
        {
            step:6,
            action:"Recite another Surah or verses from the Quran",
            recitation:["Any Surah or verses from the Quran (at minimum to be at least three verses or a verse around three verses)"]
        },
        {
            step:7,
            action:"Say 'Allahu Akbar' while going into Ruku. In Ruku, one will grasp the knees with their hands, such that the palms are placed on the knees with the finger well spread out.",
            recitation:["Subhana Rabbiy-al Azim"]
        },
        {
            step:8,
            action:"Rising back up to a standing position saying 'Sami Allahu liman Hamidah', and during standing position say 'Rabbana wa lakal hamd'",
        },
        {
            step:9,
            action:"Say 'Allahu Akbar' while going into Sajdah. One will place their knee on the ground first, followed by the hands, and then the head in between the hands. One will also firmly plant the forehead and the bone of the nose to the ground. and press the toes firmly facing the Qiblah. And palms are flat on the ground.",
            recitation:["Subhana Rabbiy-al A'la"]
        },
        {
            step:9.5,
            action:"Then one will rise from sajdah and sit in an upright position for a moment keeping the hands on the thighs. Now, one will go back into sajdah reciting the same thing that was recited for the first sajdah. Every unit in salah is composed of two sajdahs."
        },
        {
            step:10,
            action:"One will stand up straight directly getting up from the Sajdah and tie hands in the same manner as before. Now, repeat step 5"
        },
        {
            step:11,
            action:"Recite a Surah or verses from the Quran that is different from the one recited in the previous unit"
        },
        {
            step:12,
            action:"Repeat Steps 7 to 9.5 just as they were done in the first unit"
        },
        {
            step:13,
            action:"After getting up from sajdah, sit down with your hands on your thighs and recite Tashahhud and after will Recite the Shahadah keeping the right index finger raised when reciting the underlined portion",
            recitation:["Attahiyatu lillahi was-salawatu wat-tayyibat as-salamu 'alayka ayyuhan-nabiyu wa rahmatullahi wa barakatuhu as-salamu 'alayna wa 'ala ibadil-lahis-salihin"]
        },
        {
            step:14,
            action:"1A: If it is the last unit of the Set. One will recite Salah Ibrahimi and recite any dua after it. And can then one will turn their head to right and say 'As-salamu 'alaykum wa rahmatullah' and repeat to the left",
            recitation:["Allahuma salli 'ala Muhammadiw-wa 'ala 'ali Muhammadin kama sallayta 'ala Ibrahima wa 'ala ali Ibrahima innaka hamidum-majid. Allahuma barik 'ala Ibrahima wa 'ala ali Ibrahima innaka hamidum-majid"]
        },
        {
            step:14.5,
            action:"1B: One will stand back up immediately after reciting the Tashahhud and repeat steps 5 to 9. And if Fard prayer, skip to 6"
        },
        {
            step:15,
            action:"Repeat steps 11, then steps 7 through 9"
        },
        {
            step:16,
            action:"If it is the last unit of the Set, one will sit down and repeat step 13 and 14.5 to complete the Salah"
        },
        {
            step:16.5,
            action:"One will stand back up after being in Sajdah and repeat steps 5 to 9 again. And if Fard, skip step 6"
        },
        {
            step:17,
            action:"One will repeat step 13 and perform step 14 to complete Salah"
        }
]
export const enviroment = {
    salahSteps:stepsOfSalah
}
export interface SalahStep {
    step: number;
    action: string;
    recitation?: string[];
}