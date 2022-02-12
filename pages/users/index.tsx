import { NextPage } from 'next'
import { adminClient } from '../../utils/clients'

interface User {
  id: number
  name: string
}
interface UserListResponse {
  content: User[]
}
interface Props {
  userListResponse: UserListResponse
}

const Users: NextPage<Props> = ({ userListResponse }: Props) => {
  const { content: users } = userListResponse
  const renderUsers = () =>
    users.map(({ id, name }) => (
      <div key={id}>
        <h2>{id}</h2>
        <h2>{name}</h2>
      </div>
    ))
  return <>{renderUsers()}</>
}

export const getServerSideProps = async () => {
  try {
    const { data: userListResponse = {} } = await adminClient.get('/api/admin/users')
    console.log(userListResponse)
    return {
      props: {
        userListResponse,
      },
    }
  } catch (e) {
    console.log(e)
    return { props: {} }
  }
}

export default Users
