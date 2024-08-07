import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Back_Avater from '../component/topNavigation/Back_Avater'
import { Stack, Typography } from '@mui/material';
import { ReactComponent as Illustration } from '../assets/svg/Catering service-bro 1.svg';
import { blue } from '../utils/colors';
import { ReactComponent as Arrow } from '../assets/svg/Arrow.svg';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import BlueBtn from '../component/buttons/blueBtn';

const HireOtherService = () => {
  const navigate = useNavigate()
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
  const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen

  const handleYesClick = () =>{
    navigate('/Manual/hire_other_service/choose_service')
  }

  const handleNoClick = () =>{
    navigate('/paymentMethod')
  }

  return (
    <>
    <Helmet>
      <title>Want To Hire Other Services?</title>
    </Helmet>
    <div className='w-full relative px-5 top-0'>
      <Back_Avater onClick={() => navigate('/event_centers/single')} />
    </div>
    <div className='w-full h-fit max-w-full mt-8 p-4 flex justify-center items-center overflow-hidden'>
      <div className=' mt-2 lg:mt-0 w-full'>
        <div className='flex flex-col gap-2'>
          <Typography
            fontFamily='Montserrat'
            fontSize={{lg: 40, md: 35, xs: 15, xl: 45, sm: 25}}
            color={blue}
            fontWeight={800}
            textAlign='center'
            mt={3}
            lineHeight={{xl: 1, lg: 1, md: 2, sm: 2, xs: 2}}
            >Are You Interested In Hiring Other Services?
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3px'}}>
            <Arrow width={isLargeScreen ? '193px' : '112px'} height={isLargeScreen ? '37px' : '23px'}/>
          </div>
        </div>
        <div className='w-full flex flex-col lg:flex-row-reverse md:gap-0 justify-around items-center px-5'>
            <div>
               <Illustration width={isLargeScreen ? 600 : 281} height={isLargeScreen ? 470 : 270} />
            </div>
            <div>
              <Stack className='gap-2 md:gap-5'>
                <BlueBtn title='Yes' onClick={handleYesClick} />
                <BlueBtn title='No' onClick={handleNoClick} />
              </Stack>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HireOtherService
