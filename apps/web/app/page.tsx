import {prismaClient} from 'db/client' 

export default async function Home() {
  
  // const users=await prismaClient.user.findMany()
  

  return (
    <>
      {/* {
        users.map((item)=>(
          <div key={item.id} style={{padding:"5px", margin:"10px", display:"flex", gap:"10vh"}}>
            <div> {item.id}</div>
            <div> {item.email}</div>
            <div>{item.password}</div>
          </div>
        ))
      } */}

      <div> Hello, World! from main branch </div>
    </>
  );
}
