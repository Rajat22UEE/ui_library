export default function Navbar() {
    const navItems = [
        { title: 'Docs', url: '/' },
        { title: 'Components', url: '/' },
        { title: 'Blocks', url: '/' },
        { title: 'Charts', url: '/' },
        { title: 'Themes', url: '/' },
        { title: 'Colors', url: '/' }
    ];

    return (
        <div className="container-wrapper sticky top-0 z-10 bg-[#0a0909] ">
            <div className="flex h-14 items-center border-b border-[#27272A] px-4">
                
                <div className="mr-4 hidden md:flex flex-1">
                    <a className="mr-4 flex items-center gap-2 lg:mr-6" href="/">
                        <span className="hidden font-bold lg:inline-block">UI LIB</span>
                    </a>
                    <nav className="flex items-center gap-4 text-sm xl:gap-6">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                className="transition-colors hover:text-foreground/80 text-foreground"
                                href={item.url}
                            >
                                {item.title}
                            </a>
                        ))}
                    </nav>
                </div>

                
                <div className="flex flex-1 items-center justify-end">
                    <button className="inline-flex items-center gap-2 px-4 py-2 border border-muted rounded-lg text-sm text-muted-foreground hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-accent">
                        <span className="hidden lg:inline">Search documentation...</span>
                        <span className="lg:hidden">Search...</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
