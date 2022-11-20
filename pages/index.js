import React from 'react'
import Head from 'next/head'
import { Categories, PostCard ,PostWidget } from '../components';

const posts =[
  {title:"hhapt",excerpt:"new loop"},
  {title:"text",excerpt:"temple"},
  {title:"body",excerpt:"nsdasd"}
]

console.log(posts)
const HomePage = () => {
  return (
    <div className="container mx-auto px-10 mb-8  bg-gray-100"> <Head>
       <title>Gaurav Blog</title>
        <link  rel="icon" href ="/favicon.ico" /> 
        </Head> 
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" > 
                <div className="lg:col-span-8 col-span-1">
            {posts.map((post)=>{
                  return(
                    <PostCard post={post} key={post.title} />
                       
                  )  
                })}
            </div>
            <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
         <PostWidget/>
         <Categories/>
          </div>
        </div>
    
      </div> 
    </div>
  )
}
  
export default HomePage