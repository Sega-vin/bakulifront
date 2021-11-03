import React from 'react';
import Bakuli from '../../../assets/svg/Logo.js'
import UserIcon from '../../../assets/svg/UserIcon.js'
import CheckListIcon from '../../../assets/svg/CheckList.js'
import Logout from '../../../assets/svg/Logout.js'
import LogoHeader from '../../../assets/svg/LogoHeader.js'


function Icons({name, color, size, fill, onPress, style}) {
  const Сomponent = {
    Bakuli: Bakuli,
    UserIcon: UserIcon,
    CheckListIcon: CheckListIcon,
    Logout: Logout,
    LogoHeader: LogoHeader,
  }
  const ComponentRender = Сomponent[name]
  return(
    <ComponentRender {...style} onPress={onPress} fill={fill} width={size} height={size} stroke={color} />
  )
}

export default Icons;