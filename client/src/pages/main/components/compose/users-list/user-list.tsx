import React from "react";
import {Box} from "@grid";
import {User} from "./../../user"

export const UsersList = ({usersList}) => (<Box gap='10px' className={'y-offset-sm'} >
    {usersList && usersList.map((userProps, index) => (<User key={index} {...userProps}  />))}
</Box>)