"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTRPC } from "@/trpc/client"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { toast } from "sonner"


const Page = () => {

const trpc = useTRPC()
const [value,setvalue]=useState("")
const invoke = useMutation(trpc.invoke.mutationOptions({
  onSuccess:()=>{
    toast.success("Background job started")
  }
}))

  return (
  <div className="">
    <Input value={value} placeholder="write something" onChange={(e)=>setvalue(e.target.value)} />
    <Button disabled={invoke.isPending} onClick={()=>invoke.mutate({value:value})} >
    Invoke Background Job
    </Button>
  </div>
  )
}

export default Page