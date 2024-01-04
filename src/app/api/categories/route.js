import { NextResponse } from "next/server";
import data from '../../../../data/mockData'

export const GET = () => {

  const {Post} = data

  if(Post) return NextResponse.json(Post);
  return NextResponse.json({
    message: "No data"
  });
}