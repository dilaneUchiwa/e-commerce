'use client'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowBackIcon,
} from '@chakra-ui/icons';
import Logo from './Logo';

import {  useNavigate ,useLocation  } from 'react-router-dom';

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure()
  const location=useLocation();
  const navigate=useNavigate();

  const handleClickAccueil=()=>{
    navigate('/');
  }
  const handleClickSignIn=()=>{
    navigate('/signin')
  }
  const handleClickRegister=()=>{
    navigate('/register')
  }


  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.50', 'gray.100')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Logo/>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          { location.pathname==='/signin' || location.pathname==='/register'?
            <ArrowBackIcon  w={10} h={10} onClick={handleClickAccueil} />
            :
            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} onClick={handleClickSignIn} >
              se connecter
            </Button>
          }

          <Button
            as={'a'}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            className={location.pathname==='/register'?'d-none':''}
            color={'white'}
            bg={'#DF1B33'}
            onClick={handleClickRegister}
            _hover={{
              bg: 'white',
              color:'#DF1B33',
              border:'2px',
              borderColor:'#DF1B33'
            }}>
            s'inscrire
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('#DF1B33', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4} className='align-items-center'>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={1}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('red.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: '#df1b33' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'#df1b33'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}  >
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <div className='d-flex'>
            
              <Text  fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                {label}
              </Text>
          
                {children && (
                  <Icon
                    className='mx-2'
                    as={ChevronDownIcon}
                    transition={'all .25s ease-in-out'}
                    transform={isOpen ? 'rotate(180deg)' : ''}
                    w={6}
                    h={6}
                  />
                )}
            
        </div>
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Categories',
    children: [
      {
        label: 'Appareil electroniques',
        href: '#',
      },
      {
        label: 'Vetements',
        href: '#',
      },
      {
        label: 'Chaussures',
        href: '#',
      },
      {
        label: 'Sacs',
        href: '#',
      },
    ],
  },
  {
    label: 'Occasion',
    children: [
      {
        label: 'consulter',
        subLabel: 'Retrouver des produits d\'occasion ici',
        href: '#',
      },
      {
        label: 'publier',
        subLabel: 'Vous n\'utiliser plus quelques choses , vendez-le !',
        href: '#',
      },
    ],
  },
  {
    label: 'e-book',
    children: [
      {
        label: 'Science',
        subLabel: 'Retrouver des   ici',
        href: '#',
      },
      {
        label: 'Literature',
        subLabel: 'Retrouver des   ici',
        href: '#',
      },
      {
        label: 'economie',
        subLabel: 'Retrouver des   ici',
        href: '#',
      },
      {
        label: 'Entreprenueriat',
        subLabel: 'Retrouver des   ici',
        href: '#',
      },
    ],
  },
  {
    label: 'Panier',
    href: '#',
  },
  {
    label: 'Aide',
    href: '#',
  },
]