import React from 'react';
import { Dialog, Shadow, DialogRow, DialogFooter } from '../src/Dialog';
import { Button } from "../src/Button"
import { Input } from "../src/Input";


export default {
  title: 'Dialog',
  decorators: [ (storyFn: () => {}) => <Shadow>{storyFn()}</Shadow>],
  parameters: {
      info: {
        inline: false,
      },
    },
};



const inputStyle = { width: "98%" }

export const basic = () => (
  <Dialog >
    <DialogRow>
      <Input label="Commit Message" style={inputStyle} />
    </DialogRow>
    <DialogRow>
        <Input variant="textarea" label="Description" style={inputStyle} value="Text" />
    </DialogRow>
    <DialogRow>
        <Input variant="checkbox" label="Strip the notebook output?"  style={inputStyle}  />
    </DialogRow>
    <DialogFooter> 
      <Button text="Commit" />
    </DialogFooter>

  </Dialog>
);
