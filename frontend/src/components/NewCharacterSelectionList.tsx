import React from 'react';
import { useWorkflow } from './WorkflowContext';
import { toast } from 'sonner';
import { ThumbnailImage } from './ui/image-display';
import { Icon } from './icons';

interface Character {
  id: number;
  name: string;
  image: string;
}

interface NewCharacterSelectionListProps {
  onClose: () => void;
}

export default function NewCharacterSelectionList({ onClose }: NewCharacterSelectionListProps) {
  const { addNode } = useWorkflow();
  
  const characters: Character[] = [
    {
      id: 1,
      name: '豆包妹妹',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20young%20Asian%20girl%20with%20short%20black%20hair%20and%20glasses,%20wearing%20a%20black%20crop%20top%20and%20light%20blue%20wide-leg%20pants,%20full%20body,%203D%20rendering,%20clean%20background&image_size=portrait_4_3'
    },
    {
      id: 2,
      name: '豆包妹妹',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=A%20young%20Asian%20girl%20with%20short%20black%20hair%20and%20glasses,%20wearing%20a%20black%20crop%20top%20and%20light%20blue%20wide-leg%20pants,%20full%20body,%203D%20rendering,%20clean%20background&image_size=portrait_4_3'
    }
  ];

  const handleSelectCharacter = (character: Character) => {
    const id = `character-${Date.now()}`;
    const position = {
      x: window.innerWidth / 2 - 100 + Math.random() * 50,
      y: window.innerHeight / 2 - 50 + Math.random() * 50,
    };

    addNode({
      id,
      type: 'character',
      position,
      data: {
        label: character.name,
        characters: [character]
      },
    });

    toast.success(`已添加角色: ${character.name}`);
    onClose();
  };

  const handleCreateCharacter = () => {
    toast.success('创建角色功能开发中...');
  };

  return (
    <div 
      className="fixed top-1/2 -translate-y-1/2 z-50 border border-border/20 rounded-[16px] p-[8px] w-[220px] shadow-xl max-h-[calc(100vh-96px)] overflow-y-auto bg-card backdrop-blur-xl" 
      style={{ left: '64px' }}
    >
      {/* Header */}
      <div className="flex justify-center items-center gap-[10px] px-[8px] py-[4px] mb-[8px]">
        <h3 className="text-[12px] font-bold text-muted-foreground">角色</h3>
      </div>

      {/* Characters List */}
      <div className="flex flex-col gap-[8px] mb-[8px]">
        {characters.map((character) => (
          <div 
            key={character.id} 
            className="flex items-center gap-[4px] w-full cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => handleSelectCharacter(character)}
          >
            <div className="flex items-center gap-[6px] flex-1 bg-muted rounded-[30px] px-[10px] py-[4px] h-[32px]">
              <Icon name="userCircle" size={16} strokeWidth={1.28} className="text-current" />
              <span className="text-[12px] font-medium text-foreground">{character.name}</span>
            </div>
            <ThumbnailImage 
              src={character.image} 
              alt={character.name}
            />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-border my-[8px] mx-[10px]"></div>

      {/* Create Character Button */}
      <div 
        className="flex items-center justify-center gap-[6px] bg-muted rounded-[15px] px-[10px] py-[4px] h-[32px] hover:bg-muted/80 transition-colors cursor-pointer"
        onClick={handleCreateCharacter}
      >
        <span className="text-[12px] font-medium text-muted-foreground">创建角色</span>
        <Icon name="plus" size={12} strokeWidth={1.5} className="text-muted-foreground" />
      </div>
    </div>
  );
}
