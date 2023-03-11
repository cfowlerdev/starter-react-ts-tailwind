import React from 'react';
import {
  RectangleGroupIcon,
  PencilIcon,
  PuzzlePieceIcon,
  TableCellsIcon,
  BellAlertIcon
} from '@heroicons/react/24/outline';
import { Aside, AsideMenu, AsideMenuItem } from '../components/Aside';
import { Main } from '../components/Main';
import { Navbar } from '../components/Navbar';

interface IProps {}

export const DefaultLayout: React.FC<IProps> = () => {
  return (
    <div>
      <Navbar />
      <Aside>
        <AsideMenu>
          <AsideMenuItem to="/dashboard" label="Dashboard">
            <RectangleGroupIcon className="h-6 w-6" />
          </AsideMenuItem>
          <AsideMenuItem to="/typography" label="Typography">
            <PencilIcon className="h-6 w-6" />
          </AsideMenuItem>
          <AsideMenuItem to="/components" label="Components">
            <PuzzlePieceIcon className="h-6 w-6" />
          </AsideMenuItem>
          <AsideMenuItem to="/tables" label="Tables">
            <TableCellsIcon className="h-6 w-6" />
          </AsideMenuItem>
          <AsideMenuItem to="/alerts" label="Alerts">
            <BellAlertIcon className="h-6 w-6" />
          </AsideMenuItem>
        </AsideMenu>
      </Aside>
      <Main>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Tortor dignissim convallis aenean et tortor at. Aliquam ultrices sagittis orci a scelerisque
          purus semper eget duis. Elementum integer enim neque volutpat ac tincidunt. Non odio euismod lacinia at quis.
          Duis at consectetur lorem donec massa sapien faucibus et molestie. Et odio pellentesque diam volutpat commodo
          sed egestas egestas fringilla. Fermentum dui faucibus in ornare quam. Sed libero enim sed faucibus turpis in.
          Gravida quis blandit turpis cursus in hac habitasse platea. Mollis nunc sed id semper risus in hendrerit.
          Platea dictumst quisque sagittis purus sit. At imperdiet dui accumsan sit amet. Luctus venenatis lectus magna
          fringilla urna. Adipiscing diam donec adipiscing tristique risus. Neque laoreet suspendisse interdum
          consectetur libero. Sit amet nisl purus in mollis nunc sed. Malesuada bibendum arcu vitae elementum curabitur
          vitae nunc sed velit. Adipiscing elit ut aliquam purus sit amet. Id donec ultrices tincidunt arcu. Aliquet
          bibendum enim facilisis gravida. Curabitur vitae nunc sed velit dignissim sodales ut. Quam vulputate dignissim
          suspendisse in. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Sit amet consectetur
          adipiscing elit ut aliquam purus sit. Egestas diam in arcu cursus euismod quis viverra nibh. Tristique risus
          nec feugiat in fermentum posuere. Morbi non arcu risus quis varius quam quisque id diam. Lectus quam id leo in
          vitae turpis massa. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Duis tristique
          sollicitudin nibh sit amet commodo. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. In massa
          tempor nec feugiat nisl pretium. Eu non diam phasellus vestibulum lorem sed. Ultrices tincidunt arcu non
          sodales. Pellentesque eu tincidunt tortor aliquam nulla. Aliquam ultrices sagittis orci a scelerisque purus.
          Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Sed id semper risus in hendrerit gravida
          rutrum quisque non. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Ut etiam sit amet nisl purus
          in mollis nunc. Elementum sagittis vitae et leo duis ut. Nunc congue nisi vitae suscipit. Amet consectetur
          adipiscing elit pellentesque habitant. Eget gravida cum sociis natoque penatibus et magnis dis. Arcu felis
          bibendum ut tristique et egestas. Purus faucibus ornare suspendisse sed nisi. Donec adipiscing tristique risus
          nec feugiat in fermentum posuere. At quis risus sed vulputate odio. Amet risus nullam eget felis eget nunc
          lobortis. Rutrum tellus pellentesque eu tincidunt. At in tellus integer feugiat scelerisque varius. Accumsan
          lacus vel facilisis volutpat est. Amet aliquam id diam maecenas ultricies. Nunc scelerisque viverra mauris in
          aliquam. Neque aliquam vestibulum morbi blandit cursus risus. Faucibus interdum posuere lorem ipsum dolor.
          Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vulputate sapien nec sagittis
          aliquam malesuada bibendum. Neque sodales ut etiam sit amet nisl purus in mollis. Ullamcorper velit sed
          ullamcorper morbi tincidunt. Vel orci porta non pulvinar neque. Odio eu feugiat pretium nibh ipsum consequat.
          Semper auctor neque vitae tempus quam pellentesque nec. Tortor at auctor urna nunc id cursus metus aliquam.
          Penatibus et magnis dis parturient. Sem viverra aliquet eget sit amet tellus cras. Dictum sit amet justo donec
          enim diam vulputate ut. Condimentum mattis pellentesque id nibh. Etiam non quam lacus suspendisse faucibus. Eu
          sem integer vitae justo eget magna fermentum iaculis eu.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Tortor dignissim convallis aenean et tortor at. Aliquam ultrices sagittis orci a scelerisque
          purus semper eget duis. Elementum integer enim neque volutpat ac tincidunt. Non odio euismod lacinia at quis.
          Duis at consectetur lorem donec massa sapien faucibus et molestie. Et odio pellentesque diam volutpat commodo
          sed egestas egestas fringilla. Fermentum dui faucibus in ornare quam. Sed libero enim sed faucibus turpis in.
          Gravida quis blandit turpis cursus in hac habitasse platea. Mollis nunc sed id semper risus in hendrerit.
          Platea dictumst quisque sagittis purus sit. At imperdiet dui accumsan sit amet. Luctus venenatis lectus magna
          fringilla urna. Adipiscing diam donec adipiscing tristique risus. Neque laoreet suspendisse interdum
          consectetur libero. Sit amet nisl purus in mollis nunc sed. Malesuada bibendum arcu vitae elementum curabitur
          vitae nunc sed velit. Adipiscing elit ut aliquam purus sit amet. Id donec ultrices tincidunt arcu. Aliquet
          bibendum enim facilisis gravida. Curabitur vitae nunc sed velit dignissim sodales ut. Quam vulputate dignissim
          suspendisse in. Donec adipiscing tristique risus nec feugiat in fermentum posuere urna. Sit amet consectetur
          adipiscing elit ut aliquam purus sit. Egestas diam in arcu cursus euismod quis viverra nibh. Tristique risus
          nec feugiat in fermentum posuere. Morbi non arcu risus quis varius quam quisque id diam. Lectus quam id leo in
          vitae turpis massa. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Duis tristique
          sollicitudin nibh sit amet commodo. Nibh tortor id aliquet lectus proin nibh nisl condimentum id. In massa
          tempor nec feugiat nisl pretium. Eu non diam phasellus vestibulum lorem sed. Ultrices tincidunt arcu non
          sodales. Pellentesque eu tincidunt tortor aliquam nulla. Aliquam ultrices sagittis orci a scelerisque purus.
          Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Sed id semper risus in hendrerit gravida
          rutrum quisque non. Nec dui nunc mattis enim ut tellus elementum sagittis vitae. Ut etiam sit amet nisl purus
          in mollis nunc. Elementum sagittis vitae et leo duis ut. Nunc congue nisi vitae suscipit. Amet consectetur
          adipiscing elit pellentesque habitant. Eget gravida cum sociis natoque penatibus et magnis dis. Arcu felis
          bibendum ut tristique et egestas. Purus faucibus ornare suspendisse sed nisi. Donec adipiscing tristique risus
          nec feugiat in fermentum posuere. At quis risus sed vulputate odio. Amet risus nullam eget felis eget nunc
          lobortis. Rutrum tellus pellentesque eu tincidunt. At in tellus integer feugiat scelerisque varius. Accumsan
          lacus vel facilisis volutpat est. Amet aliquam id diam maecenas ultricies. Nunc scelerisque viverra mauris in
          aliquam. Neque aliquam vestibulum morbi blandit cursus risus. Faucibus interdum posuere lorem ipsum dolor.
          Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vulputate sapien nec sagittis
          aliquam malesuada bibendum. Neque sodales ut etiam sit amet nisl purus in mollis. Ullamcorper velit sed
          ullamcorper morbi tincidunt. Vel orci porta non pulvinar neque. Odio eu feugiat pretium nibh ipsum consequat.
          Semper auctor neque vitae tempus quam pellentesque nec. Tortor at auctor urna nunc id cursus metus aliquam.
          Penatibus et magnis dis parturient. Sem viverra aliquet eget sit amet tellus cras. Dictum sit amet justo donec
          enim diam vulputate ut. Condimentum mattis pellentesque id nibh. Etiam non quam lacus suspendisse faucibus. Eu
          sem integer vitae justo eget magna fermentum iaculis eu.
        </p>
      </Main>
    </div>
  );
};
