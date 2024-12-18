import { useState } from "react"
import { instance } from "../../utils/axios"
import { useNavigate } from "react-router-dom"

export default function Create() {
    const [name, setName] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [avatar, setAvatar] = useState("")
    const nav = useNavigate()

    const create = (e) => {
        e.preventDefault()
        instance.post('/product', { name, createAt, avatar }).then(() => console.log(title, desc, img),
            nav("/news"))
    }


    return (
        <div className="mt-[150px]">
            <h1>this is Create page</h1>
            <form onSubmit={(e) => create(e)} className="flex flex-col gap-5 items-center">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="title" />
                <input value={createAt} onChange={(e) => setCreateAt(e.target.value)} type="text" placeholder="desc" />
                <input value={avatar} onChange={(e) => setAvatar(e.target.value)} type="text" placeholder="img" />
                <button>create</button>
            </form>
        </div>
    )
}