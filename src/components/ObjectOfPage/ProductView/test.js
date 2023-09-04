import axios from "axios";
import React, { useEffect, useState } from "react";

const TesterPage = ({ id_product }) => {
    const [dataProducttest, setDataProducttest] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    useEffect(() => {
        if (id_product !== null) {
            axios.post("http://localhost:8080/api/getproductbyid", { id_product: id_product })
                .then(response => {
                    setDataProducttest(response.data.data[0]);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [id_product]);


    const sizeData = [];
    const colorData = [];
    if(dataProducttest!==null){
        dataProducttest.productsrescolors.forEach((item) => {
            if (!sizeData.some((size) => size.SizeId === item.SizeId)) {
                sizeData.push({ SizeId: item.SizeId, SizeName: item.SizeName });
            }
            if (!colorData.some((color) => color.ColorId === item.ColorId)) {
                colorData.push({ ColorId: item.ColorId, ColorName: item.ColorName });
            }
        });
    }
    // Function to handle Color selection
    const handleColorSelection = (SizeId) => {
        const item = dataProducttest.productsrescolors.find((item) => item.ColorId === selectedColor && item.SizeId === SizeId);
        if(item)
            return false
        else
            return true
    };

    return (
        <div>
            <h1>Color</h1>
            {colorData.length>0 && colorData.map((item, index) => (
                <div key={index} className="cc-item">
                    <input
                        type="radio"
                        name="coLors"
                        value={item.ColorId}
                        id={"cc-" + item.ColorId}
                        onChange={() => setSelectedColor(item.ColorId)}
                    />
                    <label htmlFor={"cc-" + item.ColorId}>{item.ColorName}</label>
                </div>
            ))}
            <h1>Size</h1>
            {sizeData.length > 0 && sizeData.map((item, index) => {
                return(
                    <div className="sc-item" key={index}>
                        <input
                            type="radio"
                            id={"sc-" + item.SizeId}
                            name="size"
                            value={item.SizeId.toString()}

                            disabled={
                                selectedColor === null ||
                                handleColorSelection(item.SizeId)
                            }
                        />
                        <label htmlFor={"sc-" + item.SizeId}>{item.SizeName}</label>
                    </div>
                )
            })}
        </div>
    );
}

export default TesterPage;
