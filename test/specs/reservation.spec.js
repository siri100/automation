import { DorsiaReservationScreen } from '../screenObjects/reservationScreen';
import { assert, expect } from 'chai';
import * as commonData from "../shared/test-data.json";

describe('Dorsia Software Test Suite : ', () => {

    before('Login into Dorsia app', async () => {

        let homeScreenText = await DorsiaReservationScreen.loginToDorsiaApp(commonData.memberNumber, commonData.memeberPIN);
        expect(homeScreenText).to.be.contains('Dec 9')
        console.log("Logged In Succesfully")


    });

    it('Verify existing members can successfully book a reservation.', async () => {

         await DorsiaReservationScreen.reserveRestaurant()

    });



});


