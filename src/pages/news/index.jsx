import { useEffect, useState } from "react";
import { instance } from "../../utils/axios";
import { Link } from "react-router-dom";

export default function News() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        instance.get("/product")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    const deleted = async (id) => {
        try {
            await instance.delete(`/product/${id}`);
            setProducts(products.filter((product) => product.id !== id));
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className="flex items-center justify-center flex-col gap-[20px] p-[30px]">
            <h1>this is News page</h1>
            <div className="flex gap-[20px]">
                {products?.map((product) => (
                    <div key={product?.id} className="border-2 border-amber-900 w-[250px] p-[10px] flex flex-col gap-[10px]">
                        <img src={product?.avatar} alt="" />
                        <h1 className="text-[22px] font-bold">{product?.name}</h1>
                        <h3 className="text-[12px]">{product?.createAt}</h3>
                        {/* <h2>ID: {product?.id}</h2> */}
                        <Link to={`/news/${product?.id}`}>
                            <button>update</button>
                        </Link>
                        <button onClick={() => deleted(product?.id)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
