import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtoCart } from '../../redux/features/cartSlices'
import { IoIosCart } from 'react-icons/io'
import { FaHeartCircleCheck } from 'react-icons/fa6'
import { ImEye } from 'react-icons/im'

const ItemListing = ({ img, name, price, id }) => {
  const dispatch = useDispatch()
  const mode = useSelector((state) => state.mode.mode)
  return (
    <div key={id} className={`w-[300px] h-[450px] group border border-gray-300 shadow-md`}>
      <div className='max-w-[300px] max-h-[300px] relative overflow-y-hidden'>
        <div>
          <img src={img} alt={name} className='w-[300px] h-[300px]' />
        </div>
        <div className={`w-full absolute -bottom-[130px] h-32 py-2 right-0 ${!mode ? 'bg-white' : 'bg-black'} group-hover:bottom-[0px] transition-all duration-500`}>
          <ul className='h-full w-full flex flex-col items-end justify-center gap-2'>
            <li onClick={() => dispatch(addtoCart({ id: id, name, price: Number(price.replace(/,/g, '')), img, qty: 1 }))} className={`flex justify-end items-center pl-3 cursor-pointer border-b-2 w-full ${!mode ? 'text-gray-300 hover:border-black hover:text-black' : 'text-gray-500 border-gray-500 hover:border-white hover:text-white'} transition-colors ease-linear`}>Add to Cart <IoIosCart className='mx-3' /></li>
            <li className={`flex justify-end items-center pl-3 cursor-pointer border-b-2 w-full ${!mode ? 'text-gray-300 hover:border-black hover:text-black' : 'text-gray-500 border-gray-500 hover:border-white hover:text-white'} transition-colors ease-linear`}>View Details <ImEye className='mx-3' /></li>
            <li className={`flex justify-end items-center pl-3 cursor-pointer border-b-2 w-full ${!mode ? 'text-gray-300 hover:border-black hover:text-black' : 'text-gray-500 border-gray-500 hover:border-white hover:text-white'} transition-colors ease-linear`}>Add to Wishlist <FaHeartCircleCheck className='mx-3' /></li>
          </ul>
        </div>
      </div>
      <div className='w-full py-4 px-1'>
        <div className='w-full'>
          <h1 className='text-xl font-semibold'>{name}</h1>
          <p className='flex justify-end pt-2 text-[#767676] text-[16px]'>{price} -/PKR</p>
        </div>
      </div>
    </div>
    // <div className="w-full relative group">
    //   <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
    //     <div>
    //       <Image className="w-full h-full" imgSrc={props.img} />
    //     </div>
    //     <div className="absolute top-6 left-8">
    //       {props.badge && <Badge text="New" />}
    //     </div>
    //     <div className="w-full h-32 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
    //       <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
    //         <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
    //           Compare
    //           <span>
    //             <GiReturnArrow />
    //           </span>
    //         </li>
    //         <li
    //           onClick={() =>
    //             dispatch(
    //               addToCart({
    //                 _id: props._id,
    //                 name: props.productName,
    //                 quantity: 1,
    //                 image: props.img,
    //                 badge: props.badge,
    //                 price: props.price,
    //                 colors: props.color,
    //               })
    //             )
    //           }
    //           className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
    //         >
    //           Add to Cart
    //           <span>
    //             <FaShoppingCart />
    //           </span>
    //         </li>
    //         <li
    //           onClick={handleProductDetails}
    //           className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full"
    //         >
    //           View Details
    //           <span className="text-lg">
    //             <MdOutlineLabelImportant />
    //           </span>
    //         </li>
    //         <li className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
    //           Add to Wish List
    //           <span>
    //             <BsSuitHeartFill />
    //           </span>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
    //     <div className="flex items-center justify-between font-titleFont">
    //       <h2 className="text-lg text-primeColor font-bold">
    //         {props.productName}
    //       </h2>
    //       <p className="text-[#767676] text-[14px]">${props.price}</p>
    //     </div>
    //     <div>
    //       <p className="text-[#767676] text-[14px]">{props.color}</p>
    //     </div>
    //   </div>
    // </div>

  )
}

export default ItemListing
