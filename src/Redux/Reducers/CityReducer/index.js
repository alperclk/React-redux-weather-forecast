var initialState={

    currentCity:'',
    currentCountry:'United Kingdom',
    countryList:[],
    cityList:[{id:0,name:''}],
    foreCastes:[]
};



export default function CityReducer(state=initialState,action){

    switch(action.type){
        case 'ChangeCity':
            return Object.assign({},state, {currentCity:action.payload.currentCity});
        case 'ChangeCountry':
            return Object.assign({},state, {currentCountry:action.payload.currentCountry});
        case 'GetCountryList':
            return Object.assign({},state, {countryList:action.payload.countryList});
        case 'GetCityList':
            return Object.assign({},state, {cityList:action.payload.cityList});
        case 'SetForecastes':
            return Object.assign({},state, {foreCastes:action.payload.foreCastes});
        default:
            return state;
    }

}