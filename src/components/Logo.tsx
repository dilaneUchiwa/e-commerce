import logo from '../assets/logo.png';
import { Image,Text,useColorModeValue,useBreakpointValue } from "@chakra-ui/react"
export default function Logo(){

    return (
        <>
        <Image src={logo} width={{base : '25%',md:'8%' ,lg:'5%', xl:'4%' }} className='img fluid'/>
          <div className='row align-items-center   '>
            <div className='col  align-items-center'>
              <Text></Text>
              <Text className='align-self-center' alignSelf={'center'}
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontFamily={'heading'}
                color={useColorModeValue('gray.800', 'white')}>
                All Market
              </Text>
            </div>
          </div>

        </>
    )
}