started youtube_clone
npm create vite@latest, choosed react, typescript
npm run dev

deleted app.css in src/assets
app.tsx ma remove imp of css and structure ma div of Youtube

now add tailwind css by following link commands {https://tailwindcss.com/docs/guides/vite}

first starting with page header
npm i lucide-react for logo
npm i class-variance-authority tailwind-merge for button lai style ani merge for no conflict while styling

## for catagory : catagoryPill component created, view look like below
![top bar](https://github.com/sahilmoktan/youtube_clone/assets/103031235/010f8250-456f-40bb-a2ff-41b7836c742e)


## for video thumbnail showing part: VideoGridItem component created, view as below
![vid part](https://github.com/sahilmoktan/youtube_clone/assets/103031235/28022b5c-880c-402f-a2f9-96bbca9a3186)


creating utils folder and it's file for formal formatting date colons

## able to show channel icon, title views, and uploaded ago
![ttub](https://github.com/sahilmoktan/youtube_clone/assets/103031235/fe625e9c-281e-413a-bc5d-cc70ce65ff2b)

after that, able to play video while hoveing on it by using, usestate, useeffect, useref etc

created sidebar.tsx for side bar work,
SmallSidebarItem // for medium & small screen
LargeSidebarItem // for wide & big screen

## show more or show less feature added on side bar
![show more button](https://github.com/sahilmoktan/youtube_clone/assets/103031235/93a41595-68f8-4e19-aac2-151fae3f9f33)


## sidebar toggle button fully functioning
![final](https://github.com/sahilmoktan/youtube_clone/assets/103031235/05aa6565-9407-4259-a783-fb67b8e1afe7)

this project ends here


##...
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
