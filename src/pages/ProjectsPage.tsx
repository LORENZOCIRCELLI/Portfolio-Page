import projects from '../data/projects.json'

export default function ProjectsPage() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-black mb-10">Projetos</h1>

      <div className="space-y-10">
        {projects.map(project => (
          <div key={project.id} className="border-4 border-black p-6">
            
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="text-zinc-600 mt-2">{project.description}</p>

            <div className="mt-6 space-y-4">
              <h3 className="font-bold uppercase text-sm tracking-widest">
                Atualizações
              </h3>

              {project.updates.map((u, index) => (
                <div key={index} className="border-l-4 border-black pl-4">
                  <p className="text-sm text-zinc-500">{u.date}</p>
                  <p className="text-lg">{u.content}</p>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}