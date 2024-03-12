interface Link {
    text: string
    href: string
}

interface Social {
    // must be in lowercase and valid.
    name: string
    href: string
}

export const Links: Link[] = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "Ranked Bot",
        href: "/rbot"
    },
    {
        text: "FAQ",
        href: "/faq"
    }
]

export const Socials: Social[] = []