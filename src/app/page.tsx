import Image from 'next/image'
import Script from 'next/script';

import { Html, Head, Main, NextScript } from 'next/document'



export default function Home() {

  function getToken(){
    fetch("https://z6my0pr9u3.execute-api.us-west-1.amazonaws.com/prod/auth")
    .then(data=>{return data.json()})
    .then(res=>{console.log("----------------------------------> "+ res)})
  }

  return (
        <main 
        className="flex min-h-screen flex-col items-center p-20 font-sans"
        onLoad = {(e) => {console.log("hi")}}
        >
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
  )
}
