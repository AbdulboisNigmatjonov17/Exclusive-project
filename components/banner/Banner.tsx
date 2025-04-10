import Image from 'next/image'
import React from 'react'

export default function Banner() {
        const [currentProducts, setCurrentProducts] = useState<typeof CardsData[0][]>([]);
        const [timeLeft, setTimeLeft] = useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        });
    
        useEffect(() => {
            initializeFlashSale();
            const interval = setInterval(updateCountdown, 1000);
            return () => clearInterval(interval);
        }, []);
    
        const initializeFlashSale = () => {
            const storedEndDate = localStorage.getItem('flashSaleEnd');
            const storedProducts = localStorage.getItem('flashSaleProducts');
    
            if (storedEndDate && storedProducts) {
                const endDate = new Date(storedEndDate);
                const now = new Date();
    
                if (now < endDate) {
                    setCurrentProducts(JSON.parse(storedProducts));
                    return;
                }
            }
    
            createNewFlashSale();
        };
    
        const createNewFlashSale = () => {
            const shuffled = [...CardsData].sort(() => 0.5 - Math.random());
            const selectedProducts = shuffled.slice(0, 5);
            const now = new Date();
            const endDate = new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000);
    
            localStorage.setItem('flashSaleEnd', endDate.toString());
            localStorage.setItem('flashSaleProducts', JSON.stringify(selectedProducts));
            setCurrentProducts(selectedProducts);
        };
    
        const updateCountdown = () => {
            const endDateStr = localStorage.getItem('flashSaleEnd');
            if (!endDateStr) return;
    
            const endDate = new Date(endDateStr);
            const now = new Date();
            const diff = endDate.getTime() - now.getTime();
    
            if (diff <= 0) {
                createNewFlashSale();
                return;
            }
    
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
            setTimeLeft({ days, hours, minutes, seconds });
        };
    
    return (
        <div className='bg-black'>
            <div>
                <h4>Categories</h4>
                <h1>Enhance Your Music Experience</h1>
                <div className="flex gap-2">
                    {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
                        <div key={idx} className="bg-gray-800 text-white px-3 py-1 rounded-md flex flex-col items-center">
                            <span className="font-bold text-lg">
                                {String(timeLeft[unit as keyof typeof timeLeft]).padStart(2, '0')}
                            </span>
                            <span className="text-xs capitalize">{unit}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='relative max-w-[600px] w-full h-[420px]'>
                <Image
                    src={'/banner.png'}
                    alt='banner image'
                    fill
                    sizes="(max-width: 600px) 100vw, 600px"
                    className=''
                    priority
                />
            </div>
        </div>
    )
}
