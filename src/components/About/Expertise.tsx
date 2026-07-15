const expertise=[

"Cloud Architecture",

"React Development",

"Flutter Apps",

"Google Cloud Platform",

"CI/CD Pipelines",

"Docker",

"Kubernetes",

"REST APIs"

]

export default function Expertise(){

return(

<div>

<h3 className="text-3xl font-bold mb-8">

Core Expertise

</h3>

<div className="flex flex-wrap gap-4">

{expertise.map(skill=>(

<div

key={skill}

className="px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20"

>

{skill}

</div>

))}

</div>

</div>

)

}