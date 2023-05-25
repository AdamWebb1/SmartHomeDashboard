import Image from 'next/image'
import Script from 'next/script';




export default function Home() {
  return (
    <>
    <Script id="getToken">
      {`function getToken(){
        fetch("https://z6my0pr9u3.execute-api.us-west-1.amazonaws.com/prod/auth')
        .then(data=>{return data.json()})
        .then(res=>{console.log(res)})
      }`}
    </Script>
    <main 
      className="flex min-h-screen flex-col items-center p-20 font-sans"
      />
      <h1 className={"text-5xl"}>
        My Home
      </h1>

      <table>
        <tr>
          <th>
            <h6>
              Window
            </h6>
            <Image
              src={'/closed_window.png'}
              alt={'closed window'}
              width={'150'}
              height={'150'}
            />
          </th>
          <th>
            <h6>
              Window
            </h6>
            <Image
              src={'/open_window.png'}
              alt={'open window'}
              width={'150'}
              height={'150'}
            />
          </th>
        </tr>
      </table>
    </main>
    </>
  )
}
