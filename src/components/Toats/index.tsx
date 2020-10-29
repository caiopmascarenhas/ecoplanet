import Toast from 'react-native-tiny-toast';

export const ToastError = (menssage: any) => Toast.show(menssage, {
  position: Toast.position.BOTTOM,
  containerStyle: {
    backgroundColor: '#FF4242',
    borderRadius: 7,
    width: '75%',
    height: '100%',
    zIndex: 1000,
  },
  textStyle: {
    color: '#fff',
    fontWeight: '700',
  },
  imgStyle: {},
  mask: false,
  maskStyle: {},
  duration: 3900,
  animation: true,
});

export const ToastSuccess = (menssage: any) => Toast.show(menssage, {
  position: Toast.position.TOP,
  containerStyle: {
    backgroundColor: '#34CB79',
    borderRadius: 7,
    width: '75%',
    zIndex: 1000,
  },
  textStyle: {
    color: '#fff',
    fontWeight: '700',
  },
  imgStyle: {},
  mask: false,
  maskStyle: {},
  duration: 3900,
  animation: true,
});
