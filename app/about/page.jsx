const about = {
  title: "About Me",
  description:
    "I am a Computer Science graduate from Tecnológico de Monterrey with professional experience in full stack development, robotic process automation, and iOS engineering. I have delivered enterprise solutions at C3.AI, KPMG, Cydsa, and Wizeline, and won the Swift Student Challenge in 2024 & 2025. Currently expanding into Artificial Intelligence and eager to build smarter, data-driven products.",
  info: [
    { fieldname: "Name", fieldValue: "Bernardo de la Sierra", icon: "user", link: null },
    { fieldname: "Phone", fieldValue: "(+52) 231 205 2221", icon: "phone", link: "tel:+522312052221" },
    { fieldname: "Email", fieldValue: "bdelasierrar@gmail.com", icon: "mail", link: "mailto:bdelasierrar@gmail.com" },
    { fieldname: "LinkedIn", fieldValue: "bernardo-de-la-sierra", icon: "linkedin", link: "https://www.linkedin.com/in/bernardo-de-la-sierra/?locale=es_ES" },
    { fieldname: "GitHub", fieldValue: "Bdelas777", icon: "github", link: "https://github.com/Bdelas777" },
    { fieldname: "Nationality", fieldValue: "Mexican", icon: "flag", link: null },
    { fieldname: "Languages", fieldValue: "English, Spanish", icon: "globe", link: null },
  ],
};

const icons = {
  user: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  phone: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 
      19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12
      19.79 19.79 0 0 1 1.61 3.4
      2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72
      c.127.96.361 1.903.7 2.81
      a2 2 0 0 1-.45 2.11L7.91 8.81
      a16 16 0 0 0 6.29 6.29
      l.95-.95a2 2 0 0 1 2.11-.45
      c.907.339 1.85.573 2.81.7
      A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037
      -1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046
      c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267
      5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065
      2.064 2.064 0 1 1 2.063 2.065zm1.782
      13.019H3.555V9h3.564v11.452z"/>
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3
      3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61
      -4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755
      -1.087-.744.084-.729.084-.729 1.205.084
      1.838 1.236 1.838 1.236 1.07 1.835
      2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605
      -2.665-.3-5.466-1.332-5.466-5.93
      0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
      0 0 1.005-.322 3.3 1.23.96-.267
      1.98-.399 3-.405 1.02.006
      2.04.138 3 .405 2.28-1.552
      3.285-1.23 3.285-1.23.645
      1.653.24 2.873.12 3.176.765.84
      1.23 1.91 1.23 3.22 0 4.61
      -2.805 5.625-5.475 5.92.42.36
      .81 1.096.81 2.22
      0 1.606-.015 2.896-.015 3.286
      0 .315.21.69.825.57C20.565
      21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  ),
  flag: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
      fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
      <line x1="4" x2="4" y1="22" y2="15"/>
    </svg>
  ),
  globe: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
      fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20"/>
    </svg>
  ),
};

export default function About() {
  return (
    <section className="min-h-full py-12 xl:py-20">
      <div className="container mx-auto px-6 xl:px-0">

        {/* Header */}
        <div className="mb-12 xl:mb-16">
          <span className="text-accent text-sm uppercase tracking-[4px] font-medium">
            Get to know me
          </span>
          <h2 className="h2 mt-2">{about.title}</h2>
          <div className="w-16 h-[2px] bg-accent mt-4" />
        </div>

        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20">

          {/* Left */}
          <div className="xl:w-[45%] flex flex-col justify-center">
            <p className="text-white/80 leading-relaxed text-justify text-[15px]">
              {about.description}
            </p>

            <blockquote className="mt-8 border-l-2 border-accent pl-5 text-white/50 italic text-sm">
              "Building smarter, data-driven products — one commit at a time."
            </blockquote>
          </div>

          {/* Right */}
          <div className="xl:w-[55%]">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {about.info.map((item, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 bg-white/[0.03]
                  border border-white/[0.07] rounded-xl p-4
                  hover:border-accent/40 hover:bg-white/[0.06]
                  transition-all duration-300"
                >

                  <div className="mt-[2px] w-9 h-9 rounded-full border border-accent/40
                  flex items-center justify-center text-accent shrink-0
                  group-hover:bg-accent group-hover:text-primary
                  transition-all duration-300">
                    {icons[item.icon]}
                  </div>

                  <div className="min-w-0">

                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                      {item.fieldname}
                    </p>

                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="text-white text-sm font-medium hover:text-accent transition-colors truncate block"
                      >
                        {item.fieldValue}
                      </a>
                    ) : (
                      <p className="text-white text-sm font-medium truncate">
                        {item.fieldValue}
                      </p>
                    )}

                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="https://github.com/Bdelas777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-accent
                text-accent rounded-full text-sm uppercase tracking-wider
                hover:bg-accent hover:text-primary transition-all duration-300"
              >
                {icons.github}
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/bernardo-de-la-sierra/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-accent
                text-accent rounded-full text-sm uppercase tracking-wider
                hover:bg-accent hover:text-primary transition-all duration-300"
              >
                {icons.linkedin}
                LinkedIn
              </a>

              <a
                href="mailto:bdelasierrar@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 border border-accent
                text-accent rounded-full text-sm uppercase tracking-wider
                hover:bg-accent hover:text-primary transition-all duration-300"
              >
                {icons.mail}
                Email Me
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}