import React from 'react';
import Container from '../../componesnts/Container';
import Header from '../../componesnts/Rooms/Header';
import RoomInfo from '../../componesnts/Rooms/Roominfo';
import RoomReservation from '../../componesnts/Rooms/RoomReservation';

const RoomDetails = () => {
    return (
        <div>
            <Container>
                <div className='max-screen-lg mx-auto'>

                    <div className='flex flex-col gap-6'>
                        <Header/>


                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                    <RoomInfo/>
                    <RoomReservation/>

                    </div>

                </div>


            </Container>
            
        </div>
    );
};

export default RoomDetails;