import '../App.css'

const pdfs = import.meta.glob(
  '../assets/certifications/*.pdf',
  {
    eager: true,
    import: 'default'
  }
)

const certifications = Object.entries(pdfs).map(([path, file]) => {

  const rawFileName = path
    .split('/')
    .pop()
    ?.replace('.pdf', '') || ''

  const [titlePart, institutionPart] = rawFileName.split('__')

  const formattedTitle = titlePart
    ?.replace(/-/g, ' ')

  const formattedInstitution = institutionPart
    ?.replace(/-/g, ' ')

  return {
    title: formattedTitle,
    institution: formattedInstitution,
    link: file as string
  }
})

function CertificationsPage() {

  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-10">

      <div className="w-300 max-w-full flex flex-col">
        <section className="border-8 border-black border-b-0">

        <a
            href="/"
            className="group w-full flex items-center p-4 transition-all duration-300 hover:bg-black hover:text-white"
        >
            <p className="font-bold">
            Home
            </p>
        </a>

        </section>
        <section className="border-8 border-black p-12 md:p-16">

          <div className="flex flex-col gap-4">

            <div className="flex items-start gap-6">

              <div className="w-6 h-24 bg-indigo-900"></div>

              <div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">
                  Certificações
                </h1>
              </div>

            </div>

            <div className="ml-12">
              <p className="uppercase tracking-[0.3em] text-sm text-zinc-700">
                Acadêmico • Pesquisa • Tecnologia
              </p>
            </div>

          </div>

        </section>

        <section className="border-x-8 border-b-8 border-black">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {certifications.map((certification, index) => (

              <a
                key={index}
                href={certification.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-b-4 border-black p-10 transition-all duration-300 hover:bg-black hover:text-white"
              >
                <h3 className="text-3xl font-black leading-tight capitalize">
                  {certification.title}
                </h3>

                <p className="mt-4 leading-relaxed opacity-80">
                  {certification.institution}
                </p>

              </a>

            ))}

          </div>

        </section>

      </div>

    </div>
  )
}

export default CertificationsPage