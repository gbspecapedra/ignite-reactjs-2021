import RepositoryItem from "./RepositoryItem"

import '../styles/repositories.scss'

const repository = {
  name: "unform2",
  description: "Forms in react",
  link: "https://github.com/unform/unform"
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
      </ul>
    </section>
  )
}
