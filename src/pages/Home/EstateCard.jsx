

const EstateCard = () => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-md hover:shadow-xl">
            <figure>
                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">Beautiful Home Made For You</h2>
                <p className="text-base opacity-90">If a dog chews shoes whose shoes does he choose?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias amet, animi labore facilis doloremque enim a! Labore et vel quisquam! </p>
                <div className="my-3 border-t">
                    <p className="font-bold space-x-16 mt-8">Location:
                        <span className="font-normal ml-2">
                            dhaka, mirpur
                        </span>
                        <span className="font-semibold border-l-2 pl-3">For <span className="font-normal">Sell</span></span>
                    </p>
                    <p className="font-bold">Area: <span className="font-normal">2000 sq ft</span></p>
                </div>
                <div className="card-actions flex justify-between">
                    <h3 className="font-bold text-3xl">$336</h3>
                    <button className="btn btn-warning text-base">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;