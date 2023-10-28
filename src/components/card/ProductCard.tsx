// export default function Card(article:any){
    
//     console.log(Object.values(article.comment));
//     return ( 
//         <div>
            
//             <div className="card w-100">
//               <div className="carousel slide" data-bs-ride="carousel">
//               <div className="carousel-inner" role="listbox">
//                 <div className="carousel-item active">
//                   <img src={article.image} className="w-100 d-block" alt="First slide"/>
//                   <div className="carousel-caption d-none d-md-block">
//                     <h3>{article.price} XAF</h3>
//                     <p className='text-capitalize'>{article.name}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//               <div className="card-body">
//                 <div className='d-flex justify-content-between row'>
//                   <div className='col-md-6'>
//                     <span className="text-capitalize">{article.category}</span>
//                   </div>
//                   <div className='col-md-6' >
//                       <div className='d-flex justify-content-md-end'>
//                         <span className="text-capitalize "> disponible : {article.stock}</span>
//                       </div>
//                   </div>
//                 </div>
//                 <h5 className="card-title fw-bold">{article.name}</h5>
//                 <div className='d-flex justify-content-between'>
//                   <h5>{article.like} <i style={{color:"yellow"}} className='fa-solid fa-star'></i></h5>
//                   <span className='h6'>{article.comment.length} commentaires</span>
//                 </div>
                
//               </div>
//               <div className='card-footer'>
//                   <div className='d-flex justify-content-md-end justify-content-evenly' >
//                       <a className='btn btn-success mx-2' href="http://www.google.com"><span className='d-none d-md-inline'>Ajouter au panier </span><span className='d-md-none d-inline'>Achat</span><span><i className='fa-solid fa-shopping-cart'></i></span></a>
//                       <a className='btn btn-info' href="http://www.google.com"><span >plus</span> <span><i className='fa-solid fa-circle-info'></i></span></a>
//                   </div>
//               </div>
//             </div>
          
//         </div>
//      );
// }
'use client'

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Lunette de soleil',
  price: 2000,
  rating: 4.2,
  numReviews: 34,
}

interface RatingProps {
  rating: number
  numReviews: number
}

function Rating({ rating, numReviews }: RatingProps) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            )
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  )
}

export default function ProductCart() {
  return (
    <Flex p={2}  alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
        )}

        <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.7em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {data.name}
            </Box>
            <Tooltip
              label="Ajouter au panier"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={6} w={6} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Rating rating={data.rating} numReviews={data.numReviews} />
            <Box fontSize="xl" color={useColorModeValue('gray.800', 'white')}>
              {data.price.toFixed(0)} <span></span>
              <Box as="span" color={'gray.600'} fontSize="lg">
                XAF
              </Box>
            </Box>
          </Flex>

          
        </Box>
      </Box>
    </Flex>
  )
}