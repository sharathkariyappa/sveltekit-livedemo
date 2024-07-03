import { sql } from "@vercel/postgres";

export async function load({ params,locals }) {
  return {
    names: await sql`SELECT * from NAMES where user_id='${locals.user}'`
  }
}




// export async function load({params}) {

//     // const slug = ${params.slug}
//     return {
//         content: `hello ${params.slug}`
//     }
// }