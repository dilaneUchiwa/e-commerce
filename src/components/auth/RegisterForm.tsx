'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  RadioGroup,
  Radio,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom';

export default function RegisterForm() {
    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const handleClickRegister=()=>{
        navigate('/signin')
    }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'2lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Inscrivez-vous
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            pour profiter de toutes nos produits intéressantes ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="nom" isRequired>
                  <FormLabel>Nom(s)</FormLabel>
                  <Input type="text" />
            </FormControl>
            <FormControl id="prenom" isRequired>
                  <FormLabel>Prenoms(s)</FormLabel>
                  <Input type="text" />
            </FormControl>
           <HStack>
                <div className='d-flex justify-content-between w-100'>
                    <Box>
                        <FormControl id='DayBirth'>
                            <FormLabel>
                                Date de Naissance
                            </FormLabel>
                            <Input type="date"/>
                        </FormControl>
                    </Box>
                    <Box>
                        <br />
                        <FormControl id='sexe' isRequired className='mx-5'>
                            {/* <FormLabel>
                                Sexe
                            </FormLabel> */}
                            <RadioGroup>
                                <Stack>
                                    <Radio value='M'>Homme</Radio>
                                    <Radio value='F'>Femme</Radio>
                                </Stack>
                            </RadioGroup>
                        </FormControl>
                    </Box>
                </div>
           </HStack>

            <HStack>
                <Box>
                    <FormControl id="email" isRequired>
                        <FormLabel>Tel</FormLabel>
                        <Input type='number' ></Input>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input type="email" />
                    </FormControl>
                </Box>
            </HStack>
            <FormControl id="password" isRequired>
              <FormLabel>Not de passe</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                s'inscrire
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Déjà  un compte ? <Link color={'blue.400'} onClick={handleClickRegister}>se connecter</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}