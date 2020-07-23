import React, { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Octokit } from "@octokit/rest";
import { FileExplorer } from '../src/FileExplorer';

export default {
  title: 'FileExplorer',
  parameters: {
      info: {
        inline: false,
      },
    },
};

// Folder Exploring Function
const getFiles = async ( path: string ) => {
    const octokit = new Octokit()
    let fileList: string[][] = []
    await octokit.repos.getContent({
      owner: "nteract",
      repo: "examples",
      ref: "master",
      path: path
    }).then((res :any) => {
       res.data.map( (item: any) => {
         fileList.push([ item.name, item.path, item.type])
       })
    }, (e: Error) => {
    console.log(e)
  })

  return fileList
}


// File Name, File Path, File Type
let dummyData = [[""]]

export const basic = () => { 
  const [data, setData] = useState(dummyData)

  useEffect( () => {  
    getFiles("").then( (newData: any) => {
      setData(newData)
    })
  }, [])

  return(
        <FileExplorer data={data} folderLoading={getFiles}  fileLoading={action('FileLoading')} />
  )
}

