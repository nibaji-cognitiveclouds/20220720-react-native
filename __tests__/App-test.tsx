/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import {render, fireEvent} from "@testing-library/react-native"

describe("App", ()=>{
  jest.setTimeout(5000)

  it('renders correctly', async () => {
    const tree = render (<App />);
    //@ts-ignore
    await new Promise(r => setTimeout(r, 4000))
    const btn1 = tree.getByTestId("helloBtn-1")
    fireEvent.press(btn1);
    const btn2 = tree.getByTestId("helloWorldBtn")
    fireEvent.press(btn2);
  });
})
