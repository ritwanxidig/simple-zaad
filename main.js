const button = document.querySelector('button');
button.onclick = services1;

function services1() {
    const InputElement = document.querySelector('input');
    const value = InputElement.value;
    if(value == ''){
        return;
    }
   else if(value == '*222#'){
        const ParentCreation = document.querySelector('#selection-container');
        const CreateContainer1 = document.createElement('div');
        CreateContainer1.className = 'firstContent flex justify-center bg-blue-300 max-w-sm mx-auto py-2';
        const pinKaaga = document.createElement('h4');
        pinKaaga.textContent = 'Fadlan Gali Pin-kaaga(Enter Your Pin)';
        pinKaaga.className = 'capitalize font-semibold tracking-wider';
        InputElement.setAttribute('type', 'password');

        CreateContainer1.appendChild(pinKaaga);
        ParentCreation.appendChild(CreateContainer1);
        InputElement.value = '';
    }
    else if(value == '1100')
    {
        const oldContainer = document.querySelector('.firstContent');
        oldContainer.classList.add('hidden');

        const oldInput = document.querySelector('#firstInput');
        oldInput.classList.add('hidden');

        const oldButton = document.querySelector('#firstButton');
        oldButton.classList.add('hidden');

        const oldline1 = document.querySelector('#line1');
        oldline1.classList.add('hidden');

        const newContainer = document.createElement('div');
        newContainer.className = 'secondContent flex flex-col justify-center px-2 bg-blue-300 max-w-sm mx-auto py-2';
        const FadlanDooro = document.createElement('h5')
        FadlanDooro.className = 'capitalize text-lg font-semibold tracking-wider';
        FadlanDooro.textContent = 'Fadlan Dooro:'
        const itusHadhaaga = document.createElement('h4');
        itusHadhaaga.textContent = '1. Itus Hadhaaga';
        itusHadhaaga.className = 'capitalize font-semibold tracking-wider';
       const lacagDirid = document.createElement('h4');
       lacagDirid.textContent = '2. Lacag Dirid';
       lacagDirid.className = 'capitalize font-semibold tracking-wider';
       const lacagLaBixid = document.createElement('h4');
       lacagLaBixid.textContent = '3. Lacag La Bixid';
       lacagLaBixid.className = 'capitalize font-semibold tracking-wider';
       const kuIibso = document.createElement('h4');
       kuIibso.textContent = '4. Ku Iibso';
       kuIibso.className = 'capitalize font-semibold tracking-wider';
       const itusDhaqdhaqaaqa = document.createElement('h4');
       itusDhaqdhaqaaqa.textContent = '5. Itus Dhaqdhaqaaqa';
       itusDhaqdhaqaaqa.className = 'capitalize font-semibold tracking-wider';
       const eVoucher = document.createElement('h4');
       eVoucher.textContent = '6. E-Voucher';
       eVoucher.className = 'capitalize font-semibold tracking-wider';
       const daraSalamBank = document.createElement('h4');
       daraSalamBank.textContent = '7. Dara-Salaam Bank';
       daraSalamBank.className = 'capitalize font-semibold tracking-wider';
       const kaBax = document.createElement('h4');
       kaBax.textContent = '10. Ka Bax';
       kaBax.className = 'capitalize font-semibold tracking-wider';

       newContainer.appendChild(FadlanDooro);
       newContainer.appendChild(itusHadhaaga)
       newContainer.appendChild(lacagDirid);
       newContainer.appendChild(lacagLaBixid);
       newContainer.appendChild(kuIibso);
       newContainer.appendChild(itusDhaqdhaqaaqa)
       newContainer.appendChild(eVoucher);
       newContainer.appendChild(daraSalamBank);
       newContainer.appendChild(kaBax);

       const ParentCreation1 = document.querySelector('#selection-container');
       ParentCreation1.appendChild(newContainer);

       const containerInputAndButton = document.createElement('div');
       containerInputAndButton.className = 'flex flex-col gap-0 mt-5 justify-center items-center containerInputAndButton';
       const InputElement2 = document.createElement('input');
       InputElement2.className = 'mb-5 focus:ring-4 outline-none text-center py-2 px-4 w-80 rounded-xl element2';
       const button2 = document.createElement('button');
       button2.textContent = 'Send'
       button2.className = 'text-lg bg-blue-500 px-4 py-1 text-white font-semibold tracking-wider rounded-md hover:bg-blue-600 transition duration-500';
       button2.onclick = service2;
       const line2 = document.createElement('hr');
       line2.className = 'my-5';
       containerInputAndButton.appendChild(InputElement2);
       containerInputAndButton.appendChild(button2);
       containerInputAndButton.appendChild(line2);

       ParentCreation1.appendChild(containerInputAndButton);

       

    }
    else{
        alert("Invalid Input");
    }
}
function service2() {
    const inputElement3 = document.querySelector('.element2')
    const value2 = inputElement3.value;
    if(value2 == '1'){
        alert("Hadhaagaagu Waa 10,000");
    } 
    else if(value2 == '2')
    {
        const OldnewContainer = document.querySelector('.secondContent');
        OldnewContainer.classList.add('hidden');
        const OldcontainerInputAndButton = document.querySelector('.containerInputAndButton');
        OldcontainerInputAndButton.classList.add('hidden');

        const newcontainer1 = document.createElement('div');
        newcontainer1.className = 'secondContent flex flex-col justify-center items-center bg-blue-300 max-w-sm mx-auto py-2'
        const GaliMobileka = document.createElement('h4');
        GaliMobileka.textContent = 'Fadlan Gali Mobile ka';
        GaliMobileka.className = 'capitalize text-lg font-semibold tracking-wider';

        newcontainer1.appendChild(GaliMobileka);
        const ParentCreation2 = document.querySelector('#selection-container');
        ParentCreation2.appendChild(newcontainer1);

        const containerInputAndButton2 = document.createElement('div');
        containerInputAndButton2.className = 'flex flex-col gap-0 mt-5 justify-center items-center containerInputAndButton2';
        const inputElement4 = document.createElement('input');
        inputElement4.className = 'mb-5 focus:ring-4 outline-none text-center py-2 px-4 w-80 rounded-xl element4';
        const button4 = document.createElement('button');
        button4.textContent = 'Send'
        button4.className = 'text-lg bg-blue-500 px-4 py-1 text-white font-semibold tracking-wider rounded-md hover:bg-blue-600 transition duration-500';
        button4.onclick = service3;


        containerInputAndButton2.appendChild(inputElement4);
        containerInputAndButton2.appendChild(button4);
        ParentCreation2.appendChild(containerInputAndButton2);




        // const newContainer2 = document.createElement('div');
        // newContainer2.className = 'secondContent flex flex-col justify-center items-center bg-blue-300 max-w-sm mx-auto py-2';
        // const ItusDhaqdhaqaaq = document.createElement('h5');
        // ItusDhaqdhaqaaq.textContent = 'Itus Dhaqaaq'
        // ItusDhaqdhaqaaq.className = 'capitalize text-lg font-semibold tracking-wider';
        // const DhaqdhaqaaqKaliya = document.createElement('h4');
        // DhaqdhaqaaqKaliya.textContent = '1. dhaqdhaqaaq kaliya';
        // DhaqdhaqaaqKaliya.className = 'capitalize font-semibold tracking-wider';
        // const WarbixinKooban = document.createElement('h4');
        // WarbixinKooban.textContent = '2. warbixin Kooban';
        // WarbixinKooban.className = 'capitalize font-semibold tracking-wider';
        // const kaBax = document.createElement('h4');
        // kaBax.textContent = 'Ka Bax';
        // kaBax.className = 'capitalize font-semibold tracking-wider';

        // newContainer2.appendChild(ItusDhaqdhaqaaq);
        // newContainer2.appendChild(DhaqdhaqaaqKaliya);
        // newContainer2.appendChild(WarbixinKooban);
        // newContainer2.appendChild(kaBax);

        // const ParentCreation2 = document.querySelector('#selection-container');
        // ParentCreation2.appendChild(newContainer2);

        // const containerInputAndButton2 = document.createElement('div');
        // containerInputAndButton2.className = 'flex flex-col gap-0 mt-5 justify-center items-center containerInputAndButton';
        // const InputElement3 = document.createElement('input');
        // InputElement3.className = 'mb-5 focus:ring-4 outline-none text-center py-2 px-4 w-80 rounded-xl element2';
        // const button3 = document.createElement('button');
        // button3.textContent = 'Send'
        // button3.className = 'text-lg bg-blue-500 px-4 py-1 text-white font-semibold tracking-wider rounded-md hover:bg-blue-600 transition duration-500';
        // button3.onclick = service3;
        // const line3 = document.createElement('hr');
        // line3.className = 'my-5';
        // containerInputAndButton2.appendChild(InputElement3);
        // containerInputAndButton2.appendChild(button3);
        // containerInputAndButton2.appendChild(line3);
 
        // ParentCreation2.appendChild(containerInputAndButton2);
    }
}

function service3() {
const newInputElement4 = document.querySelector('.element4');
const value4 = newInputElement4.value;
if (value4 <= 7)
{
    alert("Fadlan Dhamaystir Numberka");
}
}