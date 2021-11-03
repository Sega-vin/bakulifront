import React, {useState, useReducer, useCallback} from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { AppButton } from '../components/ui/AppButton';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppCart } from '../components/ui/AppCart';
import { useDispatch, useSelector } from 'react-redux'
import { userDetail } from '../store/actions/userAction';
import Icons from '../components/ui/AppIcon';
import { THEME } from '../theme';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from '../components/ui/AppText';
import { AppInput } from '../components/ui/AppInput';
import { CheckBox } from 'react-native-elements';
import { order } from '../store/actions/cartAction';
import { AppRadio } from '../components/ui/AppRadio';
import { AppCheckbox } from '../components/ui/AppCheckbox';


export const OrderScreen = ({ navigation }) => {
  // part 1
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [firma, setFirma] = useState('')
  const [part, setPart] = useState('')
  // part 2
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  // part 3
  const [street, setStreet] = useState('')
  const [home, setHome] = useState('')
  const [index, setIndex] = useState('')
  const [place, setPlace] = useState('')
  // part 4
  const [message, setMessage] = useState('')
  // part 5
  const [createUser, setCreateUser] = useState(false)
  // part 7
  const [getNews, setGetNews] = useState(false)

  const dispatch = useDispatch()

  const [checkRole, setCheckRole] = useState('')

  const options = [
    "Herr",
    "Frau"
  ];

  const optionsPay = [
    "Paypal",
    "GooglePay/ApplePay",
    "Barzahlung bei Abholung",
    "Kartenzahlung bei Abholung",
  ];

  const [pay, setPay] = useState({
    value: 0,
    name: 'Paypal'
  })

  const [user, setUser] = useState(false)

  const [news, setNews] = useState(false)

  const cartId = useSelector(state => state.cart.id)

  const userId = useSelector(state => state.user.user.id)

  const orderComplete = async () => {
    await dispatch(order({
      cart: cartId,
      deine_street: street,
      deine_house_number: home,
      deine_address_index: index,
      payment_type: pay,
      comment: message,
      store: 1,
      customer: userId
    }))
    // await dispatch(userDetail(userId))
    navigation.navigate('Thanks')
  }
  return <ScrollView style={styles.main}>
    <View>
      <AppCart>
        <AppTextBold>Selbst abholen</AppTextBold>
        <AppTextBold>Heute zu 13:45 Uhr.</AppTextBold>
      </AppCart>
      <AppTextBold>Logge dich ein, um schneller bestellen zu konnen</AppTextBold>
      <AppButton>JETZT EINLOGGEN</AppButton>

    </View>
    {/* <View style={styles.form_group}>
      <AppTextBold style={styles.title}>Oder als gast ohne login bestellen</AppTextBold>
      <View style={styles.checkbox_loop}>
        <RadioButtons
          options={ options }
          onSelection={ setCheckRole.bind(this) }
          selectedOption={ checkRole }
          renderOption={ renderOption }
          renderContainer={ renderContainer }
        />
      </View>
      <AppInput style={styles.input} text={"Vorname"} value={name} onChangeText={setName}/>
      <AppInput style={styles.input} text={"Nachname*"} value={lastName} onChangeText={setLastName}/>
      <AppInput style={styles.input} text={"Firma"} value={firma} onChangeText={setFirma}/>
      <AppInput style={styles.input} text={"Abteilung"} value={part} onChangeText={setPart}/>
      
      <AppTextBold style={styles.title}>Fur Ruckfragen zu Deiner Bestellung</AppTextBold>
      <AppInput style={styles.input} text={"E-Mail*"} value={email} onChangeText={setEmail}/>
      <AppInput style={styles.input} text={"Telefon*"} value={phone} onChangeText={setPhone}/>
    </View> */}
    <View style={styles.form_group}>
      <AppTextBold style={styles.title}>Deine Adresse</AppTextBold>
      <AppInput style={styles.input} text={"StraBe*"} value={street} onChangeText={setStreet}/>
      <AppInput style={styles.input} text={"Hausnummer*"} value={home} onChangeText={setHome}/>
      <AppInput style={styles.input} text={"PLZ*"} value={index} onChangeText={setIndex}/>
      <AppInput style={styles.input} text={"Ort*"} value={place} onChangeText={setPlace}/>
    </View>
    <View style={styles.form_group}>
      <AppTextBold style={styles.title}>Bemerkung zur Bestellung</AppTextBold>
      <AppInput style={styles.input} style={styles.textarea} text={"Bemerkung zur Bestellung"} multiline={true} value={message} onChangeText={setMessage}/>
    </View>
    <View style={styles.form_group}>
      <AppTextBold style={styles.title}>Bezahlung</AppTextBold>
      <AppRadio 
        selected={pay.value}
        options={optionsPay} 
        horisontal={true}
        onChangeSelect={(item, index) => setPay({
          value: index,
          name: item
        })}
      />
    </View>
    <View style={styles.form_group}>
      <AppTextBold style={styles.title}>Kundenkonto anlegen</AppTextBold>
      <AppCheckbox 
        checked={user}
        label="lch mochte ein Kundenkonto mit meinen Daten anlegen und exklusive Vorteile genieBen." 
        onChangeSelect={() => setUser(!user)}
        horisontal={true}
      />
    </View>
    <View style={styles.form_group}>
      <View style={styles.newsMt}>
        <AppCheckbox 
          checked={news}
          label="postalische Werbung erhalten" 
          onChangeSelect={() => setNews(!news)}
          horisontal={true}
        />
      </View>
      
    </View>
    <View style={styles.form_group}>
      <AppTextBold style={styles.textPolitic}>Mit Deiner Bestellung kommst Du in den Genuss von tollen Aktionen, Gutscheinen und Coupons von uns per Newsletter (E-Mail). Du kannst jederzeit der Verwendung Deiner Daten fur diesen Werbezweck widersprechen, ohne, dass Dir hierfur andere als die Falls Du kunftig keine Newsletter von uns erhalten mochtest, klicke bitte <AppTextBold style={{color: THEME.MAIN_COLOR}}>Hier.</AppTextBold>
      </AppTextBold>
    </View>
    <View style={{...styles.form_group, ...styles.border}}>
      <AppTextBold style={styles.textPolitic}>lch habe die AGB gelesen und akzeptiert. <AppTextBold style={{color: THEME.MAIN_COLOR}}>hier lesen*</AppTextBold> lch habe die Datenschutz-Erklarung gelesen und akzeptiert <AppTextBold style={{color: THEME.MAIN_COLOR}}>hier lesen*</AppTextBold>
      </AppTextBold>
    </View>
    <AppButton onPress={orderComplete} style={styles.order_button}>KOSTENPFLICHTIG BESTELLEN</AppButton>
  </ScrollView>
}

const styles = StyleSheet.create({
  border: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
    paddingBottom: 15
  },
  order_button: {
    marginTop: 30,
    marginBottom: 16
  },
  textPolitic: {
    color: '#9D9D9D',
    marginTop: 13,
    fontSize: 16
  },
  newsMt: {
    marginTop: 10
  },
  checkbox_column: {
    marginTop: 20
  },
  input: {
    height: 34,
    marginTop: 16
  },
  form_group: {
    borderTopWidth: 1,
    borderTopColor: THEME.MAIN_COLOR,
    marginTop: 20
  },
  title: {
    fontSize: 20,
    marginTop: 21,
    marginBottom: 17
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#9D9D9D',
    marginRight: 12
  },
  checkbox_wrapper: {
    flexDirection: 'row',
    marginRight: 16
  },
  checkbox_loop: {
    flexDirection: 'row'
  },
  cart_count: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textarea: {
    height: 84,
    textAlignVertical: 'top',
    paddingTop: 10
  },
  price: {
    fontSize: 18
  },
  count: {
    fontSize: 16
  },
  additionals_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },
  additionals_count: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 10,
    width: 125
  },  
  countButton: {
    borderWidth: 1,
    borderColor: '#B1B1B1',
    padding: 9,
    borderRadius: 17
  },
  edit: {
    color: THEME.MAIN_COLOR,
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    width: 100,
    borderRadius: 17,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 7
  },
  text: {
    color: '#9D9D9D',
    fontSize: 12,
  },
  cart_body: {
    flex: 1
  },
  cart_title: {
    fontSize: 16,
  },
  cart_titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  main: {
    backgroundColor: '#F5F2EB',
    flex: 1,
    paddingHorizontal: 15,
    
  },
  cart_wrapper: {
    flexDirection: 'row',
    paddingVertical: 25,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: THEME.MAIN_COLOR
  },
  cart_image: {
    width: 77,
    height: 71,
    borderRadius: 4,
    marginRight: 21
  }
})