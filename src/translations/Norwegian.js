// @flow
import type { TRANSLATION_OBJ } from '../types'

export const NORWEGIAN_TRANSLATION: TRANSLATION_OBJ = {
  General: {
    loading: 'laster inn ...',
    address: 'Adresse',
    privateKey: 'Privat nøkkel',
    cancel: 'Avbryt',
    fees: 'Avgifter',
    version: 'Versjon',
    in: 'Inn',
    out: 'Ut'
  },
  MainPage: {
    title: 'ZCL Lommebok',
    value: 'Verdi',
    send: 'Send',
    received: 'Mottatt',
    sent: 'Sendt',
    noTxFound: 'Ingen transaksjoner funnet.'
  },
  AddressInfoPage: {
    copyToClipboard: 'Kopier adresse til utklippstavle'
  },
  SendPage: {
    title: 'Send ZCL',
    payTo: 'Betal til',
    amountToPay: 'Beløp å betale',
    balance: 'Saldo',
    networkFee: 'Netverksavgift',
    slowTx: 'Langsom Tx',
    fastTx: 'Hurtig Tx',
    from: 'Fra',
    toAddress: 'Til adresse',
    amount: 'Beløp',
    max: 'Maks',
    send: 'Send',
    txSuccessful: 'Transaksjon vellykket! Klikk her for å se din transaksjon.',
    confirmSend: 'Jeg bekrefter at jeg vil sende disse ZCLene',
    invalidAddress: 'Ugyldig `Til Adresse` Kun transparente adresser støttes foreløpig.',
    invalidAmount: 'Ugyldig `Beløp`.',
    invalidFee: 'Ugyldige `Avgifter`. Forsøk 0 :)',
    zeroAmount: 'Beløp må være høyere enn 0.',
    notEnoughZCL: 'Ikke nok bekreftede ZCL på konto for å kunne gjennomføre transaksjonen.',
    noCameraPermissions: 'Ikke tilgang til kameraet. Du kan gi tilgang til kameraet under instillinger.'
  },
  TxDetailPage: {
    txid: 'Transaksjon ID',
    blockhash: 'Blokk Hash',
    blockheight: 'Blokk Høyde',
    confirmations: 'Bekrefelser'
  },
  SettingsPage: {
    title: 'Instillinger',
    language: 'Språk',
    currency: 'Valuta',
    secretPhrase: 'Vis hemmelig frase',
    showPrivateKeys: 'Vis private nøkler',
    recoverExistingWallet: 'Gjenopprett eksisterende lommebok',
    current: 'Nåværende'
  },
  SecretPhrasePage: {
    title: 'Hemmelig Frase'
  },
  ShowPrivateKeyPage: {
    title: 'Private Nøkler'
  },
  RecoverExistingWalletPage: {
    title: 'Gjenopprett Eksisterende Lommebok',
    secretPhrase: 'Hemmelig frase',
    textareaPlaceholder: 'Hemmelig frase. Minimum 16 tegn',
    confirmUnderstand: 'Jeg forstår at ved å gjenopprettet lommeboken vil nåværende lommebok bli slettet.',
    recover: 'Gjenopprett'
  },
  AboutPage: {
    title: 'Om'
  },
  PinPage: {
    changePinTitle: 'Endre PIN',
    newPinPageTitle: 'ZCL Lommebok Oppsett',
    verifyPinPageTitle: 'ZCL Lommebok PIN Bekreftelse',
    setupNewPin: 'Skriv inn ny PIN',
    reenterPin: 'Gjenta ny PIN',
    pinsNotSimilar: 'PINs stemmer ikke',
    invalidPin: 'Ugyldig PIN',
    enterYourPin: 'Skriv inn din PIN'
  },
  ContactsPage: {
    contacts: 'Kontakter',
    contactsName: 'Navn',
    contactsAddress: 'Adresse'
  }
}
