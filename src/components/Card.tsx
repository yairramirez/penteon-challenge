import { Fact, User } from "../interfaces/interfaces"

type CardArgs = {
  users: User[],
  facts: Fact[]
}

export const Card = ( { users, facts }: CardArgs ) => {

  return (
    <>
      {
          users.map((user, index) => (
            <div key={user?.email } className="shadow-md mb-4 rounded-md bg-white p-4">
              
              {/* User */}
              <div className="flex flex-nowrap">
                <img className="rounded-full" src={ user.picture.thumbnail } alt={ user.picture.thumbnail } />
                <div className="content-center px-2">{ `${ user.name.first } ${ user.name.last }` }</div>
              </div>

              {/* facts */}
              <div className="mt-4">
                {facts[index] ? (
                  <p>{facts[index].fact}</p>
                ) : (
                  <p>No fact available for this user.</p>
                )}
              </div>
            </div>
          ))
      }
    </>
  )
}
