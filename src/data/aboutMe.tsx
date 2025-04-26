export const aboutMeText = `import type {
    PersonalInfo,
    KnownLanguage,
    KnownProgrammingLanguage,
    MyApp,
    DiscordSocialInfo,
    InstagramSocialInfo,
    RevoltSocialInfo,
    GitHubSocialInfo,
    RedditSocialInfo,
    Socials
} from "@/types/aboutMe";

/*
    My personal informations
*/

const personalInfo: PersonalInfo = {
    firstName: "Trix",
    lastName: "em",
    getFullName: function(): string {
        return \`\${this.firstName} \${this.lastName}\`
    },
    age: undefined, // Not public
    gender: "Male",
    birthday: new Date([[currentTimestamp]]).toLocaleString('it').split(',')[0].replace('[[currentYear]]', '200#'), // aka 19/12/200#
    nationality: "Indian",
    status: "[[striketrhoughStart]]touching grass[[striketrhoughEnd]] [[striketrhoughStart]]playing outside[[striketrhoughEnd]] I use Arch btw nvim btw cpp btw",
};

/*
    Spoken Languages
*/

const knownLanguages: Array<KnownLanguage> = [
    {
        name: "Hindi",
        level: 100 // 0-100 (kinda obv since it's my native lang)
    },
    {
        name: "English",
        level: 100 // 0-100 (this is how I think I am, idk if others think so too)
    },
];

/*
    Programming Languages, Markup Languages and Terminal
*/

const knownProgramming: Array<KnownProgrammingLanguage> = [
    {
        name: "C++", // for the comment on the status value, the question goes also for "fs.unlink('C:\\debian.exe')"
        level: 90 // 0-100
    },
    {
        name: "Python", // for the comment on the status value, the question goes also for "os.remove('C:\\debian.exe')"
        level: 90 // 0-100
    },
    {
        name: "HTML", // for the previous comment, also for "document.getElementById('debian').remove()"
        level: 35 // 0-100
    },
    {
        name: "CSS", // also for "#debian { display: none; }"
        level: 45 // 0-100
    },
    {
        name: "Bash/Shell", // for "sudo rm -rf --no-preserve-root /debian.sh" too
        level: 45 // 0-100
    }
];

/*
    My Apps
*/

/*
    Some info about my socials
*/

const discord: DiscordSocialInfo = {
    botDeveloper: true,
    badges: [
        "House of Bravery",
        "Active Developer",
        "Originally Known as tr1x_em#7770" // Switch from discriminator to pomelo (tr1x_em#7770 => tr1x_em)
    ]
};

const instagram: InstagramSocialInfo = {
    followers: 122 // Last updated 25 April 2025, 21:40 (09:40 PM)
};

const revolt: RevoltSocialInfo = {
    botDeveloper: true, // inactive
    badges: [],
    publicBots: []
};

const gitHub: GitHubSocialInfo = {
    followers: 13, // Last updated 25 April 2025, 21:41 (09:41 PM)
    repositories: 52 // Some are private, last updated 25 April 2025, 20:41 (09:41 PM)
};

const reddit: RedditSocialInfo = {
    AccountKarma: 7.4k // Last updated 25 April 2025, 21:43 (09:43 PM)
};


/*
    Exports
*/

const socials: Socials = {
    instagram,
    discord,
    twitter,
    revolt,
    github,
    reddit
};

export default {
    knownProgramming,
    knownLanguages,
    personalInfo,
    socials,
    myApps
};
`;
