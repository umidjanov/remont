import { useEffect, useState } from "react"
import { instance } from "../../utils/axios"
import { useNavigate, useParams } from "react-router-dom"

export default function Update() {
    const {id} = useParams()
    const [name, setName] = useState("")
    const [createAt, setCreateAt] = useState("")
    const [avatar, setAvatar] = useState("")
    const nav = useNavigate()
    
    useEffect(() => {
        instance.get(`/product/${id}`).then((res) => {
            setName(res.data.name),
            setCreateAt(res.data.createAt),
            setAvatar(res.data.avatar)
        })
    }, [id])

    const update = (e) => {
        e.preventDefault()
        instance.put(`/product/${id}`, {name, createAt, avatar}).then(() => {
            nav('/news')
        })
    }

    return(
        <div>
            <h1>this is Update page</h1>
            <form onSubmit={(e) => update(e)} className="flex flex-col gap-5 items-center">
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="title"/>
                <input value={createAt} onChange={(e) => setCreateAt(e.target.value)} type="text" placeholder="desc"/>
                <input value={avatar} onChange={(e) => setAvatar(e.target.value)} type="text" placeholder="img"/>
                <button>update</button>
            </form>
        </div>
    )
}